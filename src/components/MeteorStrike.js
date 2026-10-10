import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HOVER_MS = 5000;
const FALL_MS = 4200;
const MAROON_MS = 800;
const WHITE_MS = 700;
const SETTLE_MS = 1100;
const TRAIL_COUNT = 160;
const SPARK_COUNT = 220;
const SMOKE_COUNT = 80;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Soft circular sprite for glow / plasma */
function makeGlowTexture(stops) {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([t, color]) => g.addColorStop(t, color));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/** Browser viewport size in CSS pixels */
const getViewportSize = () => {
  const vv = window.visualViewport;
  return {
    width: Math.max(1, Math.round(vv?.width || window.innerWidth)),
    height: Math.max(1, Math.round(vv?.height || window.innerHeight)),
  };
};

/**
 * Vacuum projectile motion (Wikipedia):
 *   a_x = 0,  a_y = −g
 *   v_x = v₀ cos θ   (constant)
 *   v_y = v₀ sin θ − g t
 *   x = x₀ + v₀ t cos θ
 *   y = y₀ + v₀ t sin θ − ½ g t²
 *
 * Screen space: origin bottom-left of viewport, +y up (OrthographicCamera).
 * Launch from top-left toward bottom-right with a lofted parabola.
 */
function createProjectile({ start, end, durationSec }) {
  const T = Math.max(0.001, durationSec);
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  // Apex early (~18% of flight) for a meteor-like loft then fall
  const apexFraction = 0.18;
  const g = dy / (T * T * (apexFraction - 0.5));
  const v0x = dx / T;
  const v0y = dy / T + 0.5 * g * T;

  const at = (timeSec) => {
    const t = Math.max(0, Math.min(timeSec, T));
    const x = start.x + v0x * t;
    const y = start.y + v0y * t - 0.5 * g * t * t;
    const vx = v0x;
    const vy = v0y - g * t;
    return {
      x,
      y,
      z: 0,
      vx,
      vy,
      speed: Math.hypot(vx, vy),
      heading: Math.atan2(vy, vx),
    };
  };

  return { g, v0x, v0y, T, at };
}

/** Full-viewport Three.js meteor — mounted directly on document.body */
const MeteorCanvas = ({ exploding }) => {
  const explodingRef = useRef(exploding);
  explodingRef.current = exploding;

  useEffect(() => {
    const mount = document.createElement('div');
    mount.className = 'meteor-layer meteor-layer--three';
    mount.setAttribute('aria-hidden', 'true');
    document.body.appendChild(mount);

    let { width, height } = getViewportSize();
    const margin = Math.max(48, Math.min(width, height) * 0.06);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.cssText = 'display:block;width:100%;height:100%;';
    mount.appendChild(canvas);

    const scene = new THREE.Scene();

    // Pixel-space camera: (0,0) bottom-left, (width,height) top-right
    const camera = new THREE.OrthographicCamera(0, width, height, 0, 0.1, 10);
    camera.position.z = 5;

    const pathBounds = (w, h) => ({
      start: { x: margin, y: h - margin },
      end: { x: w - margin, y: margin },
    });

    let { start, end } = pathBounds(width, height);
    let projectile = createProjectile({
      start,
      end,
      durationSec: FALL_MS / 1000,
    });

    const headR = Math.max(10, Math.min(width, height) * 0.018);
    const plasmaTex = makeGlowTexture([
      [0, 'rgba(255,255,255,1)'],
      [0.12, 'rgba(255,250,210,0.95)'],
      [0.35, 'rgba(255,170,40,0.7)'],
      [0.65, 'rgba(255,60,10,0.28)'],
      [1, 'rgba(80,0,0,0)'],
    ]);
    const sparkTex = makeGlowTexture([
      [0, 'rgba(255,255,240,1)'],
      [0.25, 'rgba(255,200,80,0.85)'],
      [0.7, 'rgba(255,80,20,0.2)'],
      [1, 'rgba(0,0,0,0)'],
    ]);
    const smokeTex = makeGlowTexture([
      [0, 'rgba(40,28,24,0.55)'],
      [0.45, 'rgba(30,22,20,0.25)'],
      [1, 'rgba(0,0,0,0)'],
    ]);

    // Ablating rocky core
    const rockGeo = new THREE.IcosahedronGeometry(headR * 0.55, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x2a1a12,
      emissive: 0xff4a00,
      emissiveIntensity: 1.4,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true,
    });
    const rock = new THREE.Mesh(rockGeo, rockMat);

    // Incandescent plasma head
    const headMat = new THREE.SpriteMaterial({
      map: plasmaTex,
      color: 0xffffff,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const head = new THREE.Sprite(headMat);
    head.scale.set(headR * 5.5, headR * 5.5, 1);

    // Elongated shock/plasma wake (points opposite velocity)
    const wakeGeo = new THREE.ConeGeometry(headR * 1.1, headR * 14, 20, 1, true);
    wakeGeo.translate(0, -headR * 7, 0);
    const wakeMat = new THREE.MeshBasicMaterial({
      color: 0xff9a40,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const wake = new THREE.Mesh(wakeGeo, wakeMat);

    const wakeOuterGeo = new THREE.ConeGeometry(headR * 2.2, headR * 18, 20, 1, true);
    wakeOuterGeo.translate(0, -headR * 9, 0);
    const wakeOuterMat = new THREE.MeshBasicMaterial({
      color: 0xff2200,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const wakeOuter = new THREE.Mesh(wakeOuterGeo, wakeOuterMat);

    // Soft elongated fire streak sprite behind the head
    const streakMat = new THREE.SpriteMaterial({
      map: plasmaTex,
      color: 0xff8030,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.85,
    });
    const streak = new THREE.Sprite(streakMat);
    streak.scale.set(headR * 3.2, headR * 16, 1);
    streak.position.set(0, -headR * 6, -0.1);

    const light = new THREE.PointLight(0xffaa44, 2.5, headR * 80, 2);

    const meteor = new THREE.Group();
    meteor.add(wakeOuter);
    meteor.add(wake);
    meteor.add(streak);
    meteor.add(rock);
    meteor.add(head);
    meteor.add(light);
    scene.add(meteor);

    // Layered trail: hot sparks + cooler flame particles seeded along history
    const sparkPos = new Float32Array(SPARK_COUNT * 3);
    const sparkLife = new Float32Array(SPARK_COUNT);
    const sparkVel = new Float32Array(SPARK_COUNT * 2);
    for (let i = 0; i < SPARK_COUNT; i += 1) {
      sparkLife[i] = Math.random();
      sparkPos[i * 3] = start.x;
      sparkPos[i * 3 + 1] = start.y;
      sparkPos[i * 3 + 2] = 0;
      sparkVel[i * 2] = 0;
      sparkVel[i * 2 + 1] = 0;
    }
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      map: sparkTex,
      color: 0xffe8a0,
      size: headR * 1.4,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      sizeAttenuation: false,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    const smokePos = new Float32Array(SMOKE_COUNT * 3);
    const smokeLife = new Float32Array(SMOKE_COUNT);
    for (let i = 0; i < SMOKE_COUNT; i += 1) {
      smokeLife[i] = Math.random();
      smokePos[i * 3] = start.x;
      smokePos[i * 3 + 1] = start.y;
      smokePos[i * 3 + 2] = 0;
    }
    const smokeGeo = new THREE.BufferGeometry();
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
    const smokeMat = new THREE.PointsMaterial({
      map: smokeTex,
      color: 0x6a4a3a,
      size: headR * 4,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      sizeAttenuation: false,
      blending: THREE.NormalBlending,
    });
    const smoke = new THREE.Points(smokeGeo, smokeMat);
    scene.add(smoke);

    // Ribbon history for dense plasma streak
    const trailPos = new Float32Array(TRAIL_COUNT * 3);
    const p0 = projectile.at(0);
    for (let i = 0; i < TRAIL_COUNT; i += 1) {
      trailPos[i * 3] = p0.x;
      trailPos[i * 3 + 1] = p0.y;
      trailPos[i * 3 + 2] = 0;
    }
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
    const trailMat = new THREE.PointsMaterial({
      map: plasmaTex,
      color: 0xffb060,
      size: headR * 2.2,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      sizeAttenuation: false,
      blending: THREE.AdditiveBlending,
    });
    const trail = new THREE.Points(trailGeo, trailMat);
    scene.add(trail);

    // Impact debris
    const burstCount = 140;
    const burstPos = new Float32Array(burstCount * 3);
    const burstVelArr = [];
    for (let i = 0; i < burstCount; i += 1) {
      burstPos[i * 3] = end.x;
      burstPos[i * 3 + 1] = end.y;
      burstPos[i * 3 + 2] = 0;
      const ang = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 520;
      burstVelArr.push({ x: Math.cos(ang) * speed, y: Math.sin(ang) * speed });
    }
    const burstGeo = new THREE.BufferGeometry();
    burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3));
    const burstMat = new THREE.PointsMaterial({
      map: sparkTex,
      color: 0xfff2d0,
      size: headR * 1.6,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      sizeAttenuation: false,
      blending: THREE.AdditiveBlending,
    });
    const burst = new THREE.Points(burstGeo, burstMat);
    scene.add(burst);

    const flashMat = new THREE.SpriteMaterial({
      map: plasmaTex,
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const flash = new THREE.Sprite(flashMat);
    flash.scale.set(1, 1, 1);
    flash.visible = false;
    scene.add(flash);

    meteor.position.set(p0.x, p0.y, 0);

    // Dim ambient so MeshStandard rock can read
    scene.add(new THREE.AmbientLight(0x221100, 0.6));

    let raf = 0;
    const startTime = performance.now();
    let burstActive = false;
    let burstStart = 0;
    let disposed = false;
    let lastNow = startTime;

    const syncSize = () => {
      ({ width, height } = getViewportSize());
      camera.left = 0;
      camera.right = width;
      camera.top = height;
      camera.bottom = 0;
      camera.updateProjectionMatrix();
      ({ start, end } = pathBounds(width, height));
      projectile = createProjectile({
        start,
        end,
        durationSec: FALL_MS / 1000,
      });
      renderer.setSize(width, height, false);
    };

    window.addEventListener('resize', syncSize);
    window.visualViewport?.addEventListener('resize', syncSize);

    const respawnSpark = (i, state) => {
      const back = -0.35 - Math.random() * 0.9;
      const side = (Math.random() - 0.5) * headR * 1.8;
      const nx = -Math.sin(state.heading);
      const ny = Math.cos(state.heading);
      sparkPos[i * 3] = state.x + Math.cos(state.heading) * back * headR * 8 + nx * side;
      sparkPos[i * 3 + 1] = state.y + Math.sin(state.heading) * back * headR * 8 + ny * side;
      sparkPos[i * 3 + 2] = 0;
      sparkVel[i * 2] = -state.vx * (0.15 + Math.random() * 0.35) + (Math.random() - 0.5) * 40;
      sparkVel[i * 2 + 1] = -state.vy * (0.15 + Math.random() * 0.35) + (Math.random() - 0.5) * 40;
      sparkLife[i] = 0.35 + Math.random() * 0.65;
    };

    const respawnSmoke = (i, state) => {
      const back = -0.8 - Math.random() * 1.6;
      smokePos[i * 3] = state.x + Math.cos(state.heading) * back * headR * 10 + (Math.random() - 0.5) * headR * 3;
      smokePos[i * 3 + 1] = state.y + Math.sin(state.heading) * back * headR * 10 + (Math.random() - 0.5) * headR * 3;
      smokePos[i * 3 + 2] = 0;
      smokeLife[i] = 0.5 + Math.random() * 1.2;
    };

    for (let i = 0; i < SPARK_COUNT; i += 1) respawnSpark(i, p0);
    for (let i = 0; i < SMOKE_COUNT; i += 1) respawnSmoke(i, p0);

    const triggerBurst = (now, at) => {
      if (burstActive) return;
      burstActive = true;
      burstStart = now;
      burstMat.opacity = 1;
      meteor.visible = false;
      trail.visible = false;
      flash.visible = true;
      flash.position.set(at.x, at.y, 0);
      flash.scale.set(headR * 40, headR * 40, 1);
      flashMat.opacity = 1;
      for (let i = 0; i < burstCount; i += 1) {
        burstPos[i * 3] = at.x;
        burstPos[i * 3 + 1] = at.y;
        burstPos[i * 3 + 2] = 0;
      }
      burstGeo.attributes.position.needsUpdate = true;
    };

    const animate = (now) => {
      if (disposed) return;
      raf = requestAnimationFrame(animate);

      const dt = Math.min(0.05, (now - lastNow) / 1000);
      lastNow = now;

      const elapsedSec = (now - startTime) / 1000;
      const state = projectile.at(elapsedSec);
      const progress = Math.min(1, elapsedSec / projectile.T);

      if (!burstActive) {
        meteor.position.set(state.x, state.y, 0);
        // Cone default points +Y; rotate so wake trails opposite velocity
        meteor.rotation.z = state.heading - Math.PI / 2;
        // Billboard streak still needs screen-space rotation to follow the path
        streakMat.rotation = state.heading - Math.PI / 2;
        rock.rotation.z += dt * 6;
        rock.rotation.x += dt * 3.5;

        const heat = 0.9 + Math.sin(now * 0.02) * 0.2;
        rockMat.emissiveIntensity = 1.1 + heat * 0.8;
        head.scale.setScalar(headR * (5.2 + Math.sin(now * 0.025) * 0.6));
        streak.scale.set(
          headR * (2.8 + Math.sin(now * 0.03) * 0.4),
          headR * (14 + Math.sin(now * 0.018) * 2),
          1
        );
        streakMat.opacity = 0.7 + heat * 0.2;
        light.intensity = 2 + heat * 1.5;
        light.color.setRGB(1, 0.55 + heat * 0.2, 0.2);

        // Dense streak history
        for (let i = TRAIL_COUNT - 1; i > 0; i -= 1) {
          trailPos[i * 3] = trailPos[(i - 1) * 3];
          trailPos[i * 3 + 1] = trailPos[(i - 1) * 3 + 1];
        }
        trailPos[0] = state.x;
        trailPos[1] = state.y;
        trailGeo.attributes.position.needsUpdate = true;
        trailMat.opacity = 0.35 + (1 - progress) * 0.45;
        trailMat.size = headR * (1.6 + (1 - progress) * 1.4);

        // Ablation sparks
        for (let i = 0; i < SPARK_COUNT; i += 1) {
          sparkLife[i] -= dt * (1.8 + Math.random());
          sparkPos[i * 3] += sparkVel[i * 2] * dt;
          sparkPos[i * 3 + 1] += sparkVel[i * 2 + 1] * dt;
          sparkVel[i * 2 + 1] -= projectile.g * 0.15 * dt;
          if (sparkLife[i] <= 0) respawnSpark(i, state);
        }
        sparkGeo.attributes.position.needsUpdate = true;
        sparkMat.opacity = 0.55 + (1 - progress) * 0.4;

        for (let i = 0; i < SMOKE_COUNT; i += 1) {
          smokeLife[i] -= dt * 0.55;
          smokePos[i * 3] += state.vx * -0.02 * dt;
          smokePos[i * 3 + 1] += 18 * dt;
          if (smokeLife[i] <= 0) respawnSmoke(i, state);
        }
        smokeGeo.attributes.position.needsUpdate = true;
        smokeMat.opacity = 0.18 + progress * 0.2;
        smokeMat.size = headR * (3.5 + progress * 2);
      }

      if (progress >= 1 || explodingRef.current) {
        triggerBurst(now, state);
      }

      if (burstActive) {
        const bt = Math.min(1, (now - burstStart) / 1000);
        flashMat.opacity = Math.max(0, 1 - bt * 2.2);
        flash.scale.setScalar(headR * (40 + bt * 80));
        for (let i = 0; i < burstCount; i += 1) {
          burstPos[i * 3] += burstVelArr[i].x * dt;
          burstPos[i * 3 + 1] += burstVelArr[i].y * dt;
          burstVelArr[i].y -= projectile.g * dt;
          burstVelArr[i].x *= 0.99;
          burstVelArr[i].y *= 0.99;
        }
        burstGeo.attributes.position.needsUpdate = true;
        burstMat.opacity = Math.max(0, 1 - bt);
        burstMat.size = headR * (1.6 * (1 - bt * 0.5));
        sparkMat.opacity = Math.max(0, 0.4 * (1 - bt));
        smokeMat.opacity = Math.max(0, 0.35 * (1 - bt * 0.7));
      }

      renderer.render(scene, camera);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', syncSize);
      window.visualViewport?.removeEventListener('resize', syncSize);
      [
        rockGeo, rockMat, wakeGeo, wakeMat, wakeOuterGeo, wakeOuterMat,
        sparkGeo, sparkMat, smokeGeo, smokeMat, trailGeo, trailMat,
        burstGeo, burstMat, flashMat, plasmaTex, sparkTex, smokeTex,
        headMat, streakMat,
      ].forEach((obj) => obj.dispose?.());
      renderer.dispose();
      if (mount.parentNode) mount.parentNode.removeChild(mount);
    };
  }, []);

  return null;
};

/**
 * After 5s continuous hover on profile — Three.js meteor strike.
 * Impact: maroon → white → dark.
 */
const MeteorStrike = ({ children }) => {
  const [phase, setPhase] = useState('idle');
  const [armed, setArmed] = useState(false);
  const hoverTimerRef = useRef(null);
  const sequenceTimersRef = useRef([]);
  const lockedRef = useRef(false);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current != null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setArmed(false);
  }, []);

  const clearSequence = useCallback(() => {
    sequenceTimersRef.current.forEach((id) => window.clearTimeout(id));
    sequenceTimersRef.current = [];
  }, []);

  useEffect(
    () => () => {
      clearHoverTimer();
      clearSequence();
    },
    [clearHoverTimer, clearSequence]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      'meteor-impact-maroon',
      'meteor-impact-white',
      'meteor-impact-settle'
    );

    if (phase === 'maroon') root.classList.add('meteor-impact-maroon');
    if (phase === 'white') root.classList.add('meteor-impact-white');
    if (phase === 'done') {
      root.classList.add('meteor-impact-settle');
      root.setAttribute('data-theme', 'dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new Event('meteor-theme-dark'));
    }
  }, [phase]);

  const startStrike = useCallback(() => {
    if (lockedRef.current || prefersReducedMotion()) return;

    lockedRef.current = true;
    setPhase('falling');
    setArmed(false);

    const t1 = window.setTimeout(() => setPhase('maroon'), FALL_MS);
    const t2 = window.setTimeout(() => setPhase('white'), FALL_MS + MAROON_MS);
    const t3 = window.setTimeout(
      () => setPhase('done'),
      FALL_MS + MAROON_MS + WHITE_MS
    );
    const t4 = window.setTimeout(() => {
      setPhase('idle');
      lockedRef.current = false;
    }, FALL_MS + MAROON_MS + WHITE_MS + SETTLE_MS);

    sequenceTimersRef.current = [t1, t2, t3, t4];
  }, []);

  const onEnter = useCallback(() => {
    if (lockedRef.current || phase !== 'idle' || prefersReducedMotion()) return;

    clearHoverTimer();
    setArmed(true);
    hoverTimerRef.current = window.setTimeout(() => {
      hoverTimerRef.current = null;
      startStrike();
    }, HOVER_MS);
  }, [phase, clearHoverTimer, startStrike]);

  const onLeave = useCallback(() => {
    if (phase === 'idle') clearHoverTimer();
  }, [phase, clearHoverTimer]);

  const showMeteor = phase === 'falling' || phase === 'maroon';

  return (
    <>
      <div
        className={`meteor-trigger${armed ? ' is-arming' : ''}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        {children}
      </div>

      {showMeteor && <MeteorCanvas exploding={phase === 'maroon'} />}
    </>
  );
};

export default MeteorStrike;

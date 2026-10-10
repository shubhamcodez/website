const OptionsPricing = {
  id: 5,
  title: "Advanced Options Pricing Models",
  date: "2025-05-12",
  description: "Exploring beyond Black-Scholes: stochastic volatility models, jump diffusion, and numerical methods.",
  content: `
    <h2>Advanced Options Pricing Models</h2>
    <p><em>Published on May 12, 2025</em></p>
    <p>Exploring beyond Black-Scholes: stochastic volatility models, jump diffusion, and numerical methods.</p>
    
    <h3>Beyond Black-Scholes</h3>
    <p>The Black-Scholes-Merton model revolutionized options pricing, but its assumptions—constant volatility and continuous price paths—often fail in real markets. Modern quantitative finance has developed sophisticated extensions that capture volatility clustering, jumps, and other market realities.</p>
    
    <h3>The Black-Scholes Framework</h3>
    <p>The fundamental Black-Scholes partial differential equation:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      ∂V/∂t + ½σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0
    </p>
    
    <p>with boundary condition V(S, T) = max(S - K, 0) for a call option, yields the famous pricing formula:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      C(S, t) = S·N(d₁) - Ke<sup>-r(T-t)</sup>·N(d₂)
    </p>
    
    <p>where:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      d₁ = [ln(S/K) + (r + ½σ²)(T-t)] / (σ√(T-t))<br/>
      d₂ = d₁ - σ√(T-t)
    </p>
    
    <p>and N(·) is the cumulative distribution function of the standard normal distribution.</p>
    
    <h3>Stochastic Volatility Models</h3>
    <p>The Heston model introduces stochastic volatility:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      dS<sub>t</sub> = rS<sub>t</sub>dt + √V<sub>t</sub>S<sub>t</sub>dW<sub>1,t</sub><br/>
      dV<sub>t</sub> = κ(θ - V<sub>t</sub>)dt + σ<sub>v</sub>√V<sub>t</sub>dW<sub>2,t</sub>
    </p>
    
    <p>where V<sub>t</sub> is the instantaneous variance, κ is the mean reversion speed, θ is the long-term variance, σ<sub>v</sub> is the volatility of volatility, and dW<sub>1,t</sub>dW<sub>2,t</sub> = ρdt captures correlation between price and volatility shocks.</p>
    
    <p>The characteristic function approach enables semi-analytical pricing. For the Heston model:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      φ(u) = E[e<sup>iu ln S<sub>T</sub></sup>] = exp(C(u, τ) + D(u, τ)V<sub>0</sub> + iu ln S<sub>0</sub>)
    </p>
    
    <p>where τ = T - t, and C and D satisfy Riccati equations. The option price is recovered via Fourier inversion:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      C(S, t) = Se<sup>-qτ</sup>P₁ - Ke<sup>-rτ</sup>P₂
    </p>
    
    <p>where P₁ and P₂ are probabilities computed via numerical integration of the characteristic function.</p>
    
    <h3>Jump Diffusion Models</h3>
    <p>Merton's jump-diffusion model incorporates discontinuous price movements:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      dS<sub>t</sub> = (r - λk)S<sub>t</sub>dt + σS<sub>t</sub>dW<sub>t</sub> + S<sub>t</sub>dJ<sub>t</sub>
    </p>
    
    <p>where J<sub>t</sub> is a compound Poisson process with jump intensity λ and jump size distribution. If jumps are log-normally distributed:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      k = E[e<sup>Z</sup> - 1] = e<sup>μ<sub>J</sub> + ½σ<sub>J</sub>²</sup> - 1
    </p>
    
    <p>The option price becomes an infinite weighted sum of Black-Scholes prices:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      C(S, t) = ∑<sub>n=0</sub><sup>∞</sup> e<sup>-λ'τ</sup>(λ'τ)<sup>n</sup> / n! · BS(S<sub>n</sub>, K, r<sub>n</sub>, σ<sub>n</sub>, τ)
    </p>
    
    <p>where λ' = λ(1+k), S<sub>n</sub> = Se<sup>-λkτ + n(μ<sub>J</sub> + ½σ<sub>J</sub>²)</sup>, r<sub>n</sub> = r - λk + n/τ·(μ<sub>J</sub> + ½σ<sub>J</sub>²), and σ<sub>n</sub>² = σ² + nσ<sub>J</sub>²/τ.</p>
    
    <h3>Numerical Methods: Finite Differences</h3>
    <p>For complex payoffs or models without closed-form solutions, finite difference methods solve the PDE numerically. The Crank-Nicolson scheme provides second-order accuracy:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      (V<sub>i,j+1</sub> - V<sub>i,j</sub>) / Δt = ½[L<sub>i,j</sub>V<sub>i,j</sub> + L<sub>i,j+1</sub>V<sub>i,j+1</sub>]
    </p>
    
    <p>where L is the spatial differential operator. This yields a tridiagonal system:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      A<sub>j+1</sub>V<sub>j+1</sub> = B<sub>j</sub>V<sub>j</sub> + C<sub>j</sub>
    </p>
    
    <p>which can be solved efficiently using the Thomas algorithm.</p>
    
    <h3>Monte Carlo Methods</h3>
    <p>Monte Carlo simulation provides flexibility for path-dependent options. The basic estimator:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Ĉ = e<sup>-rT</sup> · (1/N) ∑<sub>i=1</sub><sup>N</sup> max(S<sub>T</sub><sup>(i)</sup> - K, 0)
    </p>
    
    <p>has variance Var[Ĉ] = σ²/N, where σ² = Var[e<sup>-rT</sup>max(S<sub>T</sub> - K, 0)]. Variance reduction techniques include:</p>
    
    <p><strong>Antithetic Variates:</strong> Using both Z and -Z for each path halves variance asymptotically.</p>
    
    <p><strong>Control Variates:</strong> Exploiting correlation with a known expectation:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Ĉ<sub>CV</sub> = Ĉ - β(Ŷ - E[Y])
    </p>
    
    <p>where β = Cov[Ĉ, Ŷ] / Var[Ŷ] minimizes variance.</p>
    
    <p><strong>Importance Sampling:</strong> Changing measure to sample from regions with higher payoffs:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Ĉ<sub>IS</sub> = (1/N) ∑<sub>i=1</sub><sup>N</sup> f(X<sub>i</sub>) · (g(X<sub>i</sub>) / h(X<sub>i</sub>))
    </p>
    
    <p>where h is the importance sampling density chosen to reduce variance.</p>
    
    <h3>Greeks and Hedging</h3>
    <p>Risk management requires computing sensitivities. For a call option:</p>
    
    <p><strong>Delta:</strong> Δ = ∂C/∂S = N(d₁)</p>
    
    <p><strong>Gamma:</strong> Γ = ∂²C/∂S² = n(d₁) / (Sσ√(T-t))</p>
    
    <p><strong>Vega:</strong> ν = ∂C/∂σ = Sn(d₁)√(T-t)</p>
    
    <p><strong>Theta:</strong> Θ = ∂C/∂t = -Sn(d₁)σ / (2√(T-t)) - rKe<sup>-r(T-t)</sup>N(d₂)</p>
    
    <p><strong>Rho:</strong> ρ = ∂C/∂r = K(T-t)e<sup>-r(T-t)</sup>N(d₂)</p>
    
    <p>where n(·) is the standard normal probability density function. Dynamic delta-hedging requires continuous rebalancing, with transaction costs making perfect hedging impossible in practice.</p>
    
    <h3>Volatility Smiles and Surfaces</h3>
    <p>Market-implied volatilities exhibit smiles and skews, revealing that Black-Scholes assumptions are violated. The volatility surface σ(K, T) encodes market expectations. Stochastic volatility models can reproduce these patterns through their parameter choices, making calibration crucial:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      min<sub>θ</sub> ∑<sub>i</sub> w<sub>i</sub>(σ<sub>market</sub>(K<sub>i</sub>, T<sub>i</sub>) - σ<sub>model</sub>(K<sub>i</sub>, T<sub>i</sub>; θ))²
    </p>
    
    <p>where θ represents model parameters and w<sub>i</sub> are weights reflecting liquidity or confidence in market prices.</p>
    
    <h3>Conclusion</h3>
    <p>Modern options pricing requires sophisticated models that capture market realities beyond Black-Scholes. Stochastic volatility, jumps, and numerical methods provide the tools necessary for accurate pricing and risk management in complex market environments.</p>
  `
};

export default OptionsPricing;


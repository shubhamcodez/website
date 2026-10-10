const Candidates2026 = {
  id: 28,
  title: "Predicting the Winner of the Candidates Tournament 2026",
  date: "2026-01-07",
  description: "Using Monte Carlo simulation to forecast the winner of the FIDE Candidates Tournament 2026 based on Elo ratings and probabilistic modeling.",
  content: `
    <div class="blog-image-container">
      <img 
        src="/blog images/Candidates-2026.jpg" 
        alt="FIDE Candidates Tournament 2026 - Monte Carlo Prediction" 
        class="blog-image"
      />
    </div>

    <h2>Predicting the Winner of the Candidates Tournament 2026</h2>
    <p><em>Published on January 7, 2026</em></p>

    <p>Unlike a head-to-head match, the Candidates is chaotic by design: styles clash, preparation matters unevenly, and a single loss can derail a title challenge.</p>

    <p>In this article, I'll walk through how you can forecast to some extent the winners of the tournament through a Monte Carlo simulation.</p>

    <h3>The ELO Rating System</h3>
    <p>If you're familiar with chess, you've heard of the Elo rating. Elo ratings are often treated as rankings, but at their core, Elo is a probability model.</p>

    <p>Given two players, Elo estimates the expected score of a game — how many points one player should score on average against the other over many games. This expected score accounts for wins, draws, and losses, rather than predicting a single outcome.</p>

    <p>The standard Elo formula for Player A's expected score is:</p>

    <div class="math-formula">
      Expected Score(A) = 1 / (1 + 10^((Rating(PlayerB) - Rating(PlayerA))/400))
    </div>

    <p>Here, Rating(PlayerA) and Ratings(PlayerB) are the players' ratings. If both players are equally rated, each is expected to score 0.5 points per game. A higher rating increases expected score, but only gradually, small rating differences create small, persistent advantages.</p>

    <p>In tournaments like the Candidates, those small edges matter. Players face elite opposition, White has a measurable first-move advantage, and tiny rating differences can compound over 14 rounds — making probabilistic modeling far more informative than simple rankings.</p>

    <p>As of the latest classical ratings, here's the Elo ratings of the Candidate tournament candidates:</p>

    <ul style="padding-left: 20px; list-style: disc;">
      <li><strong>Hikaru Nakamura</strong> — 2810</li>
      <li><strong>Fabiano Caruana</strong> — 2795</li>
      <li><strong>Anish Giri</strong> — 2760</li>
      <li><strong>Rameshbabu Praggnanandhaa</strong> — 2758</li>
      <li><strong>Wei Yi</strong> — 2754</li>
      <li><strong>Javokhir Sindarov</strong> — 2726</li>
      <li><strong>Andrey Esipenko</strong> — 2698</li>
      <li><strong>Matthias Blübaum</strong> — 2679</li>
    </ul>

    <h3>Monte Carlo Simulation</h3>
    <p>A Monte Carlo simulation is a technique used to model uncertain systems by repeatedly simulating them with random outcomes and observing the distribution of results. Instead of predicting a single outcome, it asks: what happens if we run this scenario many times under the same assumptions?</p>

    <p>In this analysis, each Monte Carlo iteration simulates one full Candidates Tournament. The tournament structure is fixed: eight players compete in a double round-robin, meaning each player faces every other player twice — once with White and once with Black — for a total of 56 games.</p>

    <p>For every game, the outcome (win, draw, or loss) is sampled randomly based on the players' Elo ratings, adjusted for White's first-move advantage. Higher-rated players have a higher probability of scoring, but upsets and draws remain possible, reflecting real tournament uncertainty.</p>

    <p>After all 56 games are played, total scores are calculated and the tournament winner is recorded. If multiple players tie for first place, the win credit is split evenly among them.</p>

    <p>This entire process is repeated 10,000 times. The final win probabilities represent the fraction of simulated tournaments in which each player finishes first. In other words, they answer the question:</p>

    <blockquote>
      If the Candidates Tournament were played thousands of times under these assumptions, how often would each player win?
    </blockquote>

    <h3>Simulation Results</h3>
    <p>After running 10,000 Monte Carlo simulations of the full double round-robin Candidates Tournament, we estimate each player's chance of finishing in 1st place as follows:</p>

    <ul style="padding-left: 20px; list-style: disc;">
      <li><strong>Hikaru Nakamura</strong> — 35.69%</li>
      <li><strong>Fabiano Caruana</strong> — 26.87%</li>
      <li><strong>Anish Giri</strong> — 11.01%</li>
      <li><strong>Rameshbabu Praggnanandhaa</strong> — 10.27%</li>
      <li><strong>Wei Yi</strong> — 9.47%</li>
      <li><strong>Javokhir Sindarov</strong> — 4.10%</li>
      <li><strong>Andrey Esipenko</strong> — 1.70%</li>
      <li><strong>Matthias Blübaum</strong> — 0.90%</li>
    </ul>

    <p>These values represent the fraction of simulated tournaments where each player ended with the highest score (with ties for first split evenly among tied players). From our simulations, Hikaru Nakamura seems to be the clear favorite to win the tournament.</p>

    <p>This simulation is intentionally simple, It assumes fixed player strength throughout the tournament and treats each game as independent, with outcomes determined only through statistical aspects. It does not model fatigue, psychological pressure, opening preparation, or momentum — all of which matter in real tournaments.</p>

    <p>Because of that, the results should not be read as predictions of what will happen, but rather as estimates of what tends to happen under reasonable probabilistic assumptions.</p>

    <h3>Disclaimer</h3>
    <p>This analysis is for informational and educational purposes only. It is not financial advice and should not be used for betting, gambling, or wagering decisions. The results are based on probabilistic models and assumptions that may not reflect real-world outcomes.</p>

    <h3>Appendix</h3>
    <p>The code I used for simulating the games outcomes:</p>

    <pre><code>import random
import math

# Reproducibility
random.seed(0)

def eloNormal(eloDiff: float) -> float:
    """Normal-approx expected score (similar shape to Elo logistic)."""
    s = (2000.0 / 7.0) * math.sqrt(2.0)
    return math.erfc(-eloDiff / s) / 2.0

def eloPerPawnAtElo(elo: float) -> float:
    return math.exp(elo / 1020.0) * 26.59

def get_probabilities(Ra: float, Rb: float):
    """
    Returns (P(A wins), P(draw), P(B wins)) using your draw-shift model.
    Includes safety clamping / renormalization to avoid negative probs.
    """
    if Ra <= Rb:
        lower = Ra
        higher = Rb
        lower_is_a = True
    else:
        lower = Rb
        higher = Ra
        lower_is_a = False

    diff = lower - higher  # <= 0
    expected_lower = eloNormal(diff)

    ave = (lower + higher) / 2.0
    elo_per_pawn = eloPerPawnAtElo(ave)
    elo_shift = elo_per_pawn * 0.6

    p_lower_win = eloNormal(diff - elo_shift)
    p_draw = (expected_lower - p_lower_win) * 2.0
    p_higher_win = 1.0 - p_lower_win - p_draw

    # Safety: clamp and renormalize if needed
    p_lower_win = max(0.0, min(1.0, p_lower_win))
    p_draw = max(0.0, min(1.0, p_draw))
    p_higher_win = 1.0 - p_lower_win - p_draw

    if p_higher_win < 0.0:
        total = p_lower_win + p_draw
        if total > 0:
            p_lower_win /= total
            p_draw /= total
        p_higher_win = 0.0

    if lower_is_a:
        p_win_a = p_lower_win
        p_win_b = p_higher_win
    else:
        p_win_a = p_higher_win
        p_win_b = p_lower_win

    # Final tiny numerical normalization
    total = p_win_a + p_draw + p_win_b
    p_win_a /= total
    p_draw /= total
    p_win_b /= total

    return p_win_a, p_draw, p_win_b

players = [
    "Hikaru Nakamura",
    "Fabiano Caruana",
    "Anish Giri",
    "R. Praggnanandhaa",
    "Wei Yi",
    "Javokhir Sindarov",
    "Andrey Esipenko",
    "Matthias Blübaum",
]
ratings = {
    "Hikaru Nakamura": 2810,
    "Fabiano Caruana": 2795,
    "Anish Giri": 2760,
    "R. Praggnanandhaa": 2758,
    "Wei Yi": 2754,
    "Javokhir Sindarov": 2726,
    "Andrey Esipenko": 2698,
    "Matthias Blübaum": 2679,
}

white_bonus = 55
n_sims = 10000

win_counts = {p: 0.0 for p in players}

for _ in range(n_sims):
    scores = {p: 0.0 for p in players}

    # Old matchup structure: play every pair twice (swap colors)
    for i in range(len(players)):
        for j in range(i + 1, len(players)):
            A = players[i]
            B = players[j]

            # Game 1: A white, B black
            Ra_eff = ratings[A] + white_bonus
            Rb_eff = ratings[B]
            p_win_a, p_draw, p_win_b = get_probabilities(Ra_eff, Rb_eff)

            r = random.random()
            if r < p_win_a:
                sa, sb = 1.0, 0.0
            elif r < p_win_a + p_draw:
                sa, sb = 0.5, 0.5
            else:
                sa, sb = 0.0, 1.0
            scores[A] += sa
            scores[B] += sb

            # Game 2: B white, A black
            Rb_eff = ratings[B] + white_bonus
            Ra_eff = ratings[A]
            p_win_b, p_draw, p_win_a = get_probabilities(Rb_eff, Ra_eff)

            r = random.random()
            if r < p_win_b:
                sb, sa = 1.0, 0.0
            elif r < p_win_b + p_draw:
                sb, sa = 0.5, 0.5
            else:
                sb, sa = 0.0, 1.0
            scores[A] += sa
            scores[B] += sb

    max_score = max(scores.values())
    eps = 1e-9
    winners = [p for p in players if abs(scores[p] - max_score) < eps]
    share = 1.0 / len(winners)
    for w in winners:
        win_counts[w] += share

probs = {p: win_counts[p] / n_sims for p in players}
for p in sorted(probs, key=probs.get, reverse=True):
    print(f"{p}: {probs[p]:.4%}")</code></pre>
  `
};

export default Candidates2026;

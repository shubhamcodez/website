const PortfolioOptimization = {
  id: 7,
  title: "Modern Portfolio Theory and Beyond",
  date: "2025-09-22",
  description: "From Markowitz to Black-Litterman: advanced portfolio construction techniques.",
  content: `
    <h2>Modern Portfolio Theory and Beyond</h2>
    <p><em>Published on September 22, 2025</em></p>
    <p>From Markowitz to Black-Litterman: advanced portfolio construction techniques.</p>
    
    <h3>The Markowitz Revolution</h3>
    <p>Harry Markowitz's mean-variance optimization framework transformed portfolio management by formalizing the tradeoff between risk and return. The fundamental optimization problem:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      min<sub>w</sub> w<sup>T</sup>Σw<br/>
      subject to: w<sup>T</sup>μ = μ<sub>p</sub>, w<sup>T</sup>1 = 1
    </p>
    
    <p>yields the efficient frontier—portfolios that maximize return for a given level of risk. The solution:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      w* = (1/D)[B(Σ<sup>-1</sup>1) - A(Σ<sup>-1</sup>μ)] + (μ<sub>p</sub>/D)[C(Σ<sup>-1</sup>μ) - A(Σ<sup>-1</sup>1)]
    </p>
    
    <p>where A = 1<sup>T</sup>Σ<sup>-1</sup>μ, B = μ<sup>T</sup>Σ<sup>-1</sup>μ, C = 1<sup>T</sup>Σ<sup>-1</sup>1, and D = BC - A².</p>
    
    <h3>The Estimation Problem</h3>
    <p>Markowitz optimization is notoriously sensitive to estimation errors. For sample estimates (μ̂, Σ̂) based on T observations:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      E[||w* - ŵ*||²] = O(1/T)
    </p>
    
    <p>For N assets, we need T >> N² for reliable estimates. With monthly data and 100 assets, this requires centuries of history—clearly impractical.</p>
    
    <h3>Shrinkage Estimators</h3>
    <p>Ledoit-Wolf shrinkage combines sample covariance with a structured target:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Σ<sub>shrink</sub> = α·Σ<sub>target</sub> + (1-α)·Σ̂
    </p>
    
    <p>The optimal shrinkage intensity minimizes expected Frobenius norm:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      α* = argmin<sub>α</sub> E[||αΣ<sub>target</sub> + (1-α)Σ̂ - Σ||<sub>F</sub>²]
    </p>
    
    <p>Common targets include the single-index model (diagonal plus rank-1) or constant correlation model.</p>
    
    <h3>Black-Litterman Model</h3>
    <p>The Black-Litterman framework combines market equilibrium with investor views. Starting from market capitalization weights w<sub>mkt</sub>, implied returns are:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Π = δΣw<sub>mkt</sub>
    </p>
    
    <p>where δ is the risk aversion parameter. Investor views are expressed as:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Pμ = Q + ε
    </p>
    
    <p>where P is a pick matrix, Q contains view returns, and ε ~ N(0, Ω) represents view uncertainty. The posterior expected returns are:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      μ<sub>BL</sub> = [(τΣ)<sup>-1</sup> + P<sup>T</sup>Ω<sup>-1</sup>P]<sup>-1</sup>[(τΣ)<sup>-1</sup>Π + P<sup>T</sup>Ω<sup>-1</sup>Q]
    </p>
    
    <p>where τ scales the confidence in the prior. The posterior covariance is:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Σ<sub>BL</sub> = [(τΣ)<sup>-1</sup> + P<sup>T</sup>Ω<sup>-1</sup>P]<sup>-1</sup>
    </p>
    
    <p>This yields more stable and intuitive portfolios than pure Markowitz optimization.</p>
    
    <h3>Risk Parity</h3>
    <p>Risk parity equalizes risk contributions across assets. The marginal contribution to risk is:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      MC<sub>i</sub> = w<sub>i</sub> · ∂σ<sub>p</sub> / ∂w<sub>i</sub> = w<sub>i</sub> · (Σw)<sub>i</sub> / σ<sub>p</sub>
    </p>
    
    <p>Risk parity requires MC<sub>i</sub> = MC<sub>j</sub> for all i, j. This leads to:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      w<sub>i</sub> · (Σw)<sub>i</sub> = w<sub>j</sub> · (Σw)<sub>j</sub> = constant
    </p>
    
    <p>For a diagonal covariance matrix (uncorrelated assets), this simplifies to w<sub>i</sub>σ<sub>i</sub> = constant, implying inverse volatility weighting.</p>
    
    <h3>Factor Models</h3>
    <p>Factor models decompose returns:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      r = α + Bf + ε
    </p>
    
    <p>The covariance matrix becomes:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Σ = BΩB<sup>T</sup> + Δ
    </p>
    
    <p>where Ω is factor covariance and Δ is idiosyncratic (diagonal). For K factors and N assets, this reduces estimation from O(N²) to O(NK + K²) parameters. Principal Component Analysis (PCA) extracts factors:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Σ = UΛU<sup>T</sup> = ∑<sub>i=1</sub><sup>K</sup> λ<sub>i</sub>u<sub>i</sub>u<sub>i</sub><sup>T</sup> + residual
    </p>
    
    <p>where λ<sub>i</sub> are eigenvalues and u<sub>i</sub> are eigenvectors.</p>
    
    <h3>Robust Optimization</h3>
    <p>Robust optimization accounts for parameter uncertainty through uncertainty sets:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      min<sub>w</sub> max<sub>μ∈U<sub>μ</sub>, Σ∈U<sub>Σ</sub></sub> w<sup>T</sup>Σw<br/>
      subject to: min<sub>μ∈U<sub>μ</sub></sub> w<sup>T</sup>μ ≥ μ<sub>p</sub>, w<sup>T</sup>1 = 1
    </p>
    
    <p>Ellipsoidal uncertainty sets U<sub>μ</sub> = {μ : (μ - μ̂)<sup>T</sup>Γ<sup>-1</sup>(μ - μ̂) ≤ κ²} lead to second-order cone programs, solvable efficiently.</p>
    
    <h3>Transaction Costs</h3>
    <p>Realistic optimization must account for transaction costs. For linear costs c<sub>i</sub>:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      net return = w<sup>T</sup>μ - ∑<sub>i</sub> c<sub>i</sub>|w<sub>i</sub> - w<sub>0,i</sub>|
    </p>
    
    <p>For quadratic costs (market impact):</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      cost = ∑<sub>i</sub> γ<sub>i</sub>(w<sub>i</sub> - w<sub>0,i</sub>)²
    </p>
    
    <p>This creates a tradeoff between rebalancing frequency and tracking error.</p>
    
    <h3>Multi-Period Optimization</h3>
    <p>Dynamic programming extends to multi-period settings. The value function:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      V<sub>t</sub>(W<sub>t</sub>, x<sub>t</sub>) = max<sub>w<sub>t</sub></sub> E<sub>t</sub>[U(W<sub>T</sub>) - ∑<sub>s=t</sub><sup>T-1</sup> c(w<sub>s</sub>, w<sub>s+1</sub>)]
    </p>
    
    <p>where W<sub>t</sub> is wealth, x<sub>t</sub> is state variables, and c captures transaction costs. This yields optimal rebalancing policies that account for future opportunities.</p>
    
    <h3>Conclusion</h3>
    <p>Modern portfolio optimization has evolved far beyond Markowitz, incorporating estimation robustness, investor views, factor structure, and realistic constraints. Success requires understanding these techniques and their tradeoffs.</p>
  `
};

export default PortfolioOptimization;


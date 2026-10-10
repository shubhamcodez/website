const CreditRisk = {
  id: 9,
  title: "Credit Risk Modeling and Default Prediction",
  date: "2025-11-08",
  description: "Structural models, reduced-form approaches, and machine learning for credit risk.",
  content: `
    <h2>Credit Risk Modeling and Default Prediction</h2>
    <p><em>Published on November 8, 2025</em></p>
    <p>Structural models, reduced-form approaches, and machine learning for credit risk.</p>
    
    <h3>Introduction to Credit Risk</h3>
    <p>Credit risk—the possibility that a borrower defaults on obligations—is fundamental to fixed income and banking. Quantitative models range from structural approaches based on firm value to reduced-form models treating default as an exogenous event.</p>
    
    <h3>Merton's Structural Model</h3>
    <p>Merton models default as occurring when firm value V<sub>t</sub> falls below debt D at maturity T. Under risk-neutral measure:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      dV<sub>t</sub> = rV<sub>t</sub>dt + σ<sub>V</sub>V<sub>t</sub>dW<sub>t</sub>
    </p>
    
    <p>The probability of default:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(V<sub>T</sub> < D) = N(-d₂)
    </p>
    
    <p>where:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      d₂ = [ln(V<sub>0</sub>/D) + (r - ½σ<sub>V</sub>²)T] / (σ<sub>V</sub>√T)
    </p>
    
    <p>The credit spread (yield over risk-free rate) is:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      s = -(1/T)ln[1 - P(default) · (1 - R)]
    </p>
    
    <p>where R is the recovery rate.</p>
    
    <h3>KMV Model</h3>
    <p>The KMV (Kealhofer-McQuown-Vasicek) model extends Merton by estimating distance to default:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      DD = [E[V<sub>T</sub>] - D] / (σ<sub>V</sub>V<sub>0</sub>√T) = [ln(V<sub>0</sub>/D) + (μ - ½σ<sub>V</sub>²)T] / (σ<sub>V</sub>√T)
    </p>
    
    <p>Expected Default Frequency (EDF) maps DD to historical default rates:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      EDF = f(DD)
    </p>
    
    <p>where f is calibrated from historical data. Since V<sub>0</sub> and σ<sub>V</sub> are unobservable, they are inferred from equity prices using the relationship:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      E<sub>0</sub> = V<sub>0</sub>N(d₁) - De<sup>-rT</sup>N(d₂)
    </p>
    
    <p>and σ<sub>E</sub>E<sub>0</sub> = N(d₁)σ<sub>V</sub>V<sub>0</sub> (via Itô's lemma).</p>
    
    <h3>Reduced-Form Models</h3>
    <p>Reduced-form models treat default as a Poisson process with intensity λ<sub>t</sub>. The survival probability:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(τ > T) = E[exp(-∫<sub>0</sub><sup>T</sup> λ<sub>s</sub>ds)]
    </p>
    
    <p>For constant intensity λ:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(τ > T) = e<sup>-λT</sup>
    </p>
    
    <p>The credit spread equals the risk-neutral intensity:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      s = λ<sup>Q</sup>(1 - R)
    </p>
    
    <p>Cox-Ingersoll-Ross (CIR) models stochastic intensity:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      dλ<sub>t</sub> = κ(θ - λ<sub>t</sub>)dt + σ<sub>λ</sub>√λ<sub>t</sub>dW<sub>t</sub>
    </p>
    
    <p>yielding closed-form survival probabilities.</p>
    
    <h3>Credit Default Swaps</h3>
    <p>CDS spreads reflect market-implied default probabilities. The par spread s satisfies:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      PV(premium leg) = PV(protection leg)
    </p>
    
    <p>For quarterly payments:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      s · ∑<sub>i=1</sub><sup>4T</sup> Δt<sub>i</sub>P(0, t<sub>i</sub>)P(τ > t<sub>i</sub>) = (1-R) · ∫<sub>0</sub><sup>T</sup> P(0, t)(-dP(τ > t)/dt)dt
    </p>
    
    <p>where P(0, t) is the discount factor and P(τ > t) is the survival probability.</p>
    
    <h3>Portfolio Credit Risk</h3>
    <p>Vasicek's one-factor model captures correlation through a common factor:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      X<sub>i</sub> = √ρ·Z + √(1-ρ)·ε<sub>i</sub>
    </p>
    
    <p>where Z is the common factor, ε<sub>i</sub> are idiosyncratic, and ρ is correlation. Default occurs when X<sub>i</sub> < Φ<sup>-1</sup>(PD), where PD is the unconditional default probability. The portfolio loss distribution:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(L ≤ x) = Φ([Φ<sup>-1</sup>(x) - √ρ·Φ<sup>-1</sup>(PD)] / √(1-ρ))
    </p>
    
    <p>This underlies Basel capital requirements.</p>
    
    <h3>Machine Learning Approaches</h3>
    <p>Logistic regression models default probability:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(Y=1 | X) = 1 / (1 + exp(-(β₀ + β<sup>T</sup>X)))
    </p>
    
    <p>Gradient boosting (XGBoost) combines weak learners:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      ŷ = ∑<sub>m=1</sub><sup>M</sup> f<sub>m</sub>(x)
    </p>
    
    <p>where each f<sub>m</sub> is a decision tree. The objective function:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      L = ∑<sub>i</sub> l(y<sub>i</sub>, ŷ<sub>i</sub>) + ∑<sub>m</sub> Ω(f<sub>m</sub>)
    </p>
    
    <p>where Ω penalizes model complexity. Neural networks can capture non-linear interactions:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(default) = σ(W<sub>2</sub>·ReLU(W<sub>1</sub>X + b<sub>1</sub>) + b<sub>2</sub>)
    </p>
    
    <h3>Credit Scoring</h3>
    <p>Credit scores (e.g., FICO) rank-order borrowers. The Gini coefficient measures discriminatory power:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Gini = 2∫<sub>0</sub><sup>1</sup> [ROC(s) - s]ds
    </p>
    
    <p>where ROC is the receiver operating characteristic curve. The Kolmogorov-Smirnov statistic:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      KS = max<sub>s</sub> |F<sub>good</sub>(s) - F<sub>bad</sub>(s)|
    </p>
    
    <p>measures separation between good and bad score distributions.</p>
    
    <h3>Stress Testing</h3>
    <p>Regulatory stress tests (e.g., CCAR) project losses under adverse scenarios. For a portfolio:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Loss = ∑<sub>i</sub> EAD<sub>i</sub> · LGD<sub>i</sub> · P(default<sub>i</sub> | scenario)
    </p>
    
    <p>where EAD is exposure at default and LGD is loss given default. Macroeconomic scenarios affect default probabilities through:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      PD<sub>i</sub>(scenario) = f(macro variables, firm characteristics)
    </p>
    
    <h3>Conclusion</h3>
    <p>Credit risk modeling spans structural approaches based on firm fundamentals to reduced-form models and modern machine learning techniques. Each approach has strengths, and successful practitioners understand when to apply which method.</p>
  `
};

export default CreditRisk;


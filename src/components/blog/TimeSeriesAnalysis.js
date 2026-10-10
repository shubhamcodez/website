const TimeSeriesAnalysis = {
  id: 8,
  title: "Time Series Analysis in Finance",
  date: "2025-10-15",
  description: "ARIMA, GARCH, and cointegration: modeling financial time series dynamics.",
  content: `
    <h2>Time Series Analysis in Finance</h2>
    <p><em>Published on October 15, 2025</em></p>
    <p>ARIMA, GARCH, and cointegration: modeling financial time series dynamics.</p>
    
    <h3>Stationarity and Unit Roots</h3>
    <p>Many financial time series are non-stationary, exhibiting trends and unit roots. The Augmented Dickey-Fuller (ADF) test examines:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Δy<sub>t</sub> = α + βt + γy<sub>t-1</sub> + ∑<sub>i=1</sub><sup>p</sup> δ<sub>i</sub>Δy<sub>t-i</sub> + ε<sub>t</sub>
    </p>
    
    <p>The null hypothesis H₀: γ = 0 (unit root) is tested against H₁: γ < 0 (stationary). The test statistic follows a non-standard distribution, requiring specialized critical values.</p>
    
    <h3>ARIMA Models</h3>
    <p>ARIMA(p, d, q) models combine autoregressive (AR), differencing (I), and moving average (MA) components:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      (1 - ∑<sub>i=1</sub><sup>p</sup> φ<sub>i</sub>L<sup>i</sup>)(1 - L)<sup>d</sup>y<sub>t</sub> = (1 + ∑<sub>j=1</sub><sup>q</sup> θ<sub>j</sub>L<sup>j</sup>)ε<sub>t</sub>
    </p>
    
    <p>where L is the lag operator (Ly<sub>t</sub> = y<sub>t-1</sub>). The AR component captures serial correlation, MA captures error structure, and differencing removes trends. Box-Jenkins methodology uses ACF and PACF to identify orders (p, d, q).</p>
    
    <h3>GARCH Models</h3>
    <p>Generalized Autoregressive Conditional Heteroskedasticity (GARCH) models capture volatility clustering. GARCH(1,1):</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      r<sub>t</sub> = μ + ε<sub>t</sub><br/>
      ε<sub>t</sub> = σ<sub>t</sub>z<sub>t</sub>, z<sub>t</sub> ~ i.i.d.(0, 1)<br/>
      σ<sub>t</sub><sup>2</sup> = ω + αε<sub>t-1</sub><sup>2</sup> + βσ<sub>t-1</sub><sup>2</sup>
    </p>
    
    <p>The unconditional variance is:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      E[σ<sub>t</sub><sup>2</sup>] = ω / (1 - α - β)
    </p>
    
    <p>requiring α + β < 1 for stationarity. The half-life of volatility shocks is:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      HL = -ln(2) / ln(α + β)
    </p>
    
    <h3>EGARCH and Asymmetric Volatility</h3>
    <p>Exponential GARCH captures leverage effects (negative returns increase volatility more):</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      ln(σ<sub>t</sub><sup>2</sup>) = ω + α(|z<sub>t-1</sub>| - E[|z<sub>t-1</sub>|]) + γz<sub>t-1</sub> + βln(σ<sub>t-1</sub><sup>2</sup>)
    </p>
    
    <p>The γ term captures asymmetry: γ < 0 implies negative shocks increase volatility more. For standard normal z, E[|z|] = √(2/π).</p>
    
    <h3>Cointegration</h3>
    <p>Cointegrated series share a long-run relationship despite being individually non-stationary. For y<sub>t</sub> and x<sub>t</sub>, if z<sub>t</sub> = y<sub>t</sub> - βx<sub>t</sub> is stationary, they are cointegrated. The Engle-Granger two-step procedure:</p>
    
    <p><strong>Step 1:</strong> Estimate β via OLS: y<sub>t</sub> = α + βx<sub>t</sub> + ε<sub>t</sub></p>
    
    <p><strong>Step 2:</strong> Test residuals ε̂<sub>t</sub> for stationarity using ADF.</p>
    
    <p>The Johansen test provides a multivariate framework. For a VAR(p):</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      ΔY<sub>t</sub> = ΠY<sub>t-1</sub> + ∑<sub>i=1</sub><sup>p-1</sup> Γ<sub>i</sub>ΔY<sub>t-i</sub> + ε<sub>t</sub>
    </p>
    
    <p>where Π = αβ<sup>T</sup>. The rank r of Π determines cointegration relationships. The trace test statistic:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      λ<sub>trace</sub>(r) = -T∑<sub>i=r+1</sub><sup>n</sup> ln(1 - λ̂<sub>i</sub>)
    </p>
    
    <p>where λ̂<sub>i</sub> are eigenvalues of Π.</p>
    
    <h3>Vector Error Correction Models</h3>
    <p>VECM models cointegrated systems:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      Δy<sub>t</sub> = α<sub>y</sub>(y<sub>t-1</sub> - βx<sub>t-1</sub>) + ∑<sub>i=1</sub><sup>p-1</sup> γ<sub>i</sub>Δy<sub>t-i</sub> + ε<sub>y,t</sub><br/>
      Δx<sub>t</sub> = α<sub>x</sub>(y<sub>t-1</sub> - βx<sub>t-1</sub>) + ∑<sub>i=1</sub><sup>p-1</sup> δ<sub>i</sub>Δx<sub>t-i</sub> + ε<sub>x,t</sub>
    </p>
    
    <p>The error correction term (y<sub>t-1</sub> - βx<sub>t-1</sub>) captures adjustment toward long-run equilibrium. The speed of adjustment coefficients α<sub>y</sub>, α<sub>x</sub> determine how quickly deviations correct.</p>
    
    <h3>State Space Models</h3>
    <p>State space models separate observed and latent states:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      y<sub>t</sub> = Z<sub>t</sub>α<sub>t</sub> + ε<sub>t</sub> (observation equation)<br/>
      α<sub>t</sub> = T<sub>t</sub>α<sub>t-1</sub> + R<sub>t</sub>η<sub>t</sub> (state equation)
    </p>
    
    <p>The Kalman filter recursively updates state estimates:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      α<sub>t|t</sub> = α<sub>t|t-1</sub> + K<sub>t</sub>(y<sub>t</sub> - Z<sub>t</sub>α<sub>t|t-1</sub>)<br/>
      K<sub>t</sub> = P<sub>t|t-1</sub>Z<sub>t</sub><sup>T</sup>(Z<sub>t</sub>P<sub>t|t-1</sub>Z<sub>t</sub><sup>T</sup> + H<sub>t</sub>)<sup>-1</sup>
    </p>
    
    <p>where K<sub>t</sub> is the Kalman gain and P<sub>t|t-1</sub> is the prediction error covariance.</p>
    
    <h3>Regime-Switching Models</h3>
    <p>Markov-switching models allow parameters to vary across regimes:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      y<sub>t</sub> = μ<sub>s<sub>t</sub></sub> + σ<sub>s<sub>t</sub></sub>ε<sub>t</sub><br/>
      P(s<sub>t</sub> = j | s<sub>t-1</sub> = i) = p<sub>ij</sub>
    </p>
    
    <p>The Hamilton filter computes filtered probabilities:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      P(s<sub>t</sub> = i | y<sub>1:t</sub>) ∝ f(y<sub>t</sub> | s<sub>t</sub> = i) · ∑<sub>j</sub> p<sub>ji</sub>P(s<sub>t-1</sub> = j | y<sub>1:t-1</sub>)
    </p>
    
    <p>where f(y<sub>t</sub> | s<sub>t</sub> = i) is the likelihood under regime i.</p>
    
    <h3>Forecasting</h3>
    <p>For ARIMA(p, d, q), h-step ahead forecasts:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      ŷ<sub>T+h|T</sub> = E[y<sub>T+h</sub> | y<sub>1:T</sub>]
    </p>
    
    <p>Forecast errors accumulate: Var(ŷ<sub>T+h|T</sub> - y<sub>T+h</sub>) increases with h. For GARCH, volatility forecasts:</p>
    
    <p style="text-align: center; font-family: 'Courier New', monospace; padding: 15px; background-color: var(--card-background-color); border-left: 3px solid var(--primary); margin: 20px 0;">
      E[σ<sub>T+h</sub><sup>2</sup> | ℱ<sub>T</sub>] = ω(1 - (α+β)<sup>h</sup>) / (1 - α - β) + (α+β)<sup>h</sup>σ<sub>T</sub><sup>2</sup>
    </p>
    
    <p>converge to unconditional variance as h → ∞.</p>
    
    <h3>Conclusion</h3>
    <p>Time series analysis provides essential tools for modeling financial dynamics, from volatility clustering to long-run relationships. Mastery of these techniques is fundamental to quantitative finance.</p>
  `
};

export default TimeSeriesAnalysis;


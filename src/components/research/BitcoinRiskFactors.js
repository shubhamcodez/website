import React from 'react';

const BitcoinRiskFactors = () => {
  return (
    <>
      <section className="paper-section">
        <h2>Research Questions</h2>
        <p>This study addresses three primary research questions:</p>
        <ol>
          <li>Does the Fama-French three-factor model effectively explain Bitcoin's returns?</li>
          <li>How do the market risk, size, and value factors influence Bitcoin's returns?</li>
          <li>Do these influences vary significantly across different moving average periods?</li>
        </ol>
      </section>

      <section className="paper-section">
        <h2>Methodology</h2>
        <p>The Fama-French three-factor model is specified as:</p>
        <div className="formula">
          R<sub>Bitcoin</sub> - R<sub>f</sub> = α + β(R<sub>m</sub> - R<sub>f</sub>) + σSMB + hHML + kMOM
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>R<sub>Bitcoin</sub>:</strong> Total returns from Bitcoin</li>
          <li><strong>R<sub>f</sub>:</strong> Risk-free rate of return</li>
          <li><strong>R<sub>m</sub>:</strong> Broader market returns</li>
          <li><strong>SMB:</strong> Size factor (Small Minus Big)</li>
          <li><strong>HML:</strong> Value factor (High Minus Low)</li>
          <li><strong>MOM:</strong> Momentum factor</li>
        </ul>

        <h3>Factors Explained</h3>
        <ul>
          <li><strong>Market Risk Premium (R<sub>m</sub> - R<sub>f</sub>):</strong> Measures the excess return of the market over the risk-free rate. β (market beta) represents Bitcoin's sensitivity to overall market returns.</li>
          <li><strong>SMB (Small Minus Big):</strong> Size premium capturing return differential between small-cap and large-cap stocks. σ measures Bitcoin's sensitivity to the size factor.</li>
          <li><strong>HML (High Minus Low):</strong> Value premium capturing return differential between value and growth stocks. h measures Bitcoin's sensitivity to the value factor.</li>
          <li><strong>MOM (Momentum Factor):</strong> Captures the tendency of past winners to continue performing well. k measures Bitcoin's sensitivity to momentum.</li>
        </ul>

        <h3>Data and Analysis</h3>
        <ul>
          <li><strong>Data Period:</strong> Weekly Bitcoin return data from September 2014 to March 2024</li>
          <li><strong>Moving Averages:</strong> Analysis conducted over weekly, 10-week, 20-week, and 52-week moving average periods</li>
          <li><strong>Statistical Method:</strong> Ordinary Least Squares (OLS) regression to estimate coefficients and their statistical significance</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Key Findings</h2>
        <h3>Model Fit Improvement</h3>
        <p>The R-squared values show significant improvement with longer moving averages:</p>
        <ul>
          <li><strong>Weekly data:</strong> R² = 0.005 (not significant, p = 0.682)</li>
          <li><strong>10-week MA:</strong> R² = 0.131 (highly significant, p &lt; 0.0001)</li>
          <li><strong>20-week MA:</strong> R² = 0.184 (highly significant, p &lt; 0.0001)</li>
          <li><strong>52-week MA:</strong> R² = 0.352 (highly significant, p &lt; 0.0001)</li>
        </ul>
        <p>The 52-week moving average demonstrates the highest explanatory power, indicating that traditional equity market factors are more effective in explaining Bitcoin's returns over longer periods.</p>

        <h3>Factor Significance</h3>
        <ul>
          <li><strong>Market Risk Factor:</strong> Not significant in weekly data (p = 0.340) but becomes highly significant with moving averages (p &lt; 0.0001), with coefficients increasing from 0.0019 to 0.0357</li>
          <li><strong>Size Factor (SMB):</strong> Not significant in weekly data (p = 0.547) but highly significant across all moving averages (p &lt; 0.0001), with coefficients increasing from 0.0021 to 0.0567</li>
          <li><strong>Value Factor (HML):</strong> Not significant in weekly (p = 0.597) and 10-week (p = 0.360) models, approaches significance in 20-week (p = 0.065), and highly significant in 52-week model (p &lt; 0.0001), with coefficient of 0.0367</li>
          <li><strong>Momentum Factor:</strong> Not significant in weekly (p = 0.579) and 52-week (p = 0.213) models, but shows moderate significance in 10-week (p = 0.022) and 20-week (p = 0.025) moving averages</li>
        </ul>

        <h3>Intercept Analysis</h3>
        <p>The intercept is statistically significant across all models with negative coefficients (-0.0133 to -0.0154), suggesting a consistent negative excess return not explained by the included factors.</p>
      </section>

      <section className="paper-section">
        <h2>Discussion</h2>
        <h3>Market Risk Factor</h3>
        <p>The market risk factor consistently shows significant positive coefficients across all moving averages, indicating a positive relationship with Bitcoin's returns. This suggests that Bitcoin's performance is influenced by overall market movements, with the relationship strengthening over longer periods.</p>

        <h3>Size Factor</h3>
        <p>The size factor is significant across all moving averages, particularly in the 52-week model. This highlights the relevance of size effects in Bitcoin's performance, potentially reflecting the impact of liquidity and market capitalization on Bitcoin returns. Bitcoin behaves more like small-cap stocks over longer time horizons.</p>

        <h3>Value Factor</h3>
        <p>The value factor shows significance only in the 52-week moving average, suggesting that value effects are more pronounced over longer horizons. This indicates that Bitcoin behaves more like value stocks in the long run, aligning with assets that yield higher returns over extended periods.</p>

        <h3>Model Limitations</h3>
        <p>Diagnostic statistics indicate some issues with non-normality and autocorrelation, particularly in longer-term models. The Durbin-Watson statistics suggest potential autocorrelation issues, especially in models with moving averages.</p>
      </section>

      <section className="paper-section">
        <h2>Implications</h2>
        <ul>
          <li><strong>Risk Management:</strong> Understanding that Bitcoin is influenced by traditional equity market factors helps in better risk management and portfolio construction</li>
          <li><strong>Diversification:</strong> The findings suggest Bitcoin may not provide complete diversification from traditional markets, especially over longer periods</li>
          <li><strong>Regulatory Considerations:</strong> The correlation with equity market factors has implications for regulatory approaches to cryptocurrency</li>
          <li><strong>Investment Strategy:</strong> Investors can use these insights to better understand Bitcoin's risk-return profile and make more informed investment decisions</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Future Research Directions</h2>
        <p>The study acknowledges limitations and suggests future research should consider:</p>
        <ul>
          <li>Additional factors beyond traditional Fama-French factors</li>
          <li>Sentiment-driven factors, such as social media trends and investor sentiment indices</li>
          <li>Macroeconomic variables and geopolitical events</li>
          <li>Bitcoin's unique characteristics that may not be captured by equity-based models</li>
        </ul>
        <p>The paper notes that sentiment-driven influences, known to play a significant role in cryptocurrency markets, are not accounted for in this analysis.</p>
      </section>
    </>
  );
};

export default BitcoinRiskFactors;


import React from 'react';

const KANAutoencoders = () => {
  return (
    <>
      <section className="paper-section">
        <h2>Background & Motivation</h2>
        <h3>Factor Models in Finance</h3>
        <p>Factor models are central to quantitative finance and asset pricing—the study of how various systematic risk factors explain cross-sectional differences in asset returns. Traditional factor models, such as:</p>
        <ul>
          <li><strong>CAPM</strong> (Capital Asset Pricing Model)</li>
          <li><strong>Fama-French multi-factor models</strong></li>
          <li><strong>Statistical PCA-based factor models</strong></li>
        </ul>
        <p>All impose <strong>linear relationships</strong> between asset characteristics and factor exposures. While useful, these frameworks are limited:</p>
        <ul>
          <li>They assume linear mappings from characteristics to exposures, which may miss complex nonlinear effects</li>
          <li>They either require predefined risk factors (like market, size, value) or fail to incorporate rich characteristic information effectively</li>
        </ul>
        <p>This has motivated researchers to introduce <strong>machine learning (ML)</strong> into asset pricing to capture nonlinearities and latent structure. Deep learning methods such as <strong>autoencoders</strong> have been used to learn latent factors—but these often use <strong>Multilayer Perceptrons (MLPs)</strong> with fixed activations like ReLU, which lack interpretability and may underfit complex relationships.</p>
      </section>

      <section className="paper-section">
        <h2>Kolmogorov–Arnold Networks (KANs)</h2>
        <h3>What are KANs?</h3>
        <p>Kolmogorov–Arnold Networks (KANs) are a new class of neural architectures based on the <strong>Kolmogorov–Arnold representation theorem</strong>, which states:</p>
        <blockquote>
          Any continuous multivariate function can be exactly represented as a finite sum of continuous univariate functions of linear combinations of variables plus addition.
        </blockquote>
        <p>In practical terms, this means a high-dimensional function can be decomposed into sums of one-dimensional nonlinear components. KANs exploit this by:</p>
        <ul>
          <li>Using <em>learnable nonlinear activation functions</em>, often parameterized as splines, on every connection in the network</li>
          <li>Offering more flexibility than standard MLPs with fixed activations (ReLU, tanh, etc.)</li>
          <li>Enabling more <strong>interpretable mappings</strong> from inputs to outputs because each learned activation has an explicit function form</li>
        </ul>
        <p>In contrast, MLPs approximate functions through stacked linear layers and fixed piecewise nonlinearities, which can be expressive but are harder to interpret and may require more parameters for the same approximation quality.</p>
      </section>

      <section className="paper-section">
        <h2>Conditional Autoencoders in Asset Pricing</h2>
        <h3>Traditional Autoencoder Models</h3>
        <p>Autoencoders are neural networks designed to learn <strong>compressed latent representations</strong> of input data that can reconstruct the inputs effectively. In finance:</p>
        <ul>
          <li>Autoencoders can extract latent factors (f<sub>t</sub>) from returns (r<sub>t</sub>) without predefined economic factors</li>
          <li>Conditional autoencoders extend this by using <strong>observable firm characteristics</strong> (Z<sub>t-1</sub>) to model factor exposures (β(Z<sub>t-1</sub>))</li>
        </ul>
        <p>The general form of the conditional factor model is:</p>
        <div className="formula">
          r<sub>t</sub> = β(Z<sub>t-1</sub>) f<sub>t</sub> + ε<sub>t</sub>
        </div>
        <p>where:</p>
        <ul>
          <li>r<sub>t</sub> is the vector of cross-sectional asset returns at time t</li>
          <li>β(Z<sub>t-1</sub>) are factor exposures modeled as functions of lagged asset characteristics</li>
          <li>f<sub>t</sub> is the latent factor return vector</li>
          <li>ε<sub>t</sub> is idiosyncratic noise</li>
        </ul>
        <p>Standard ML approaches (e.g., MLPs) approximate β(·) with neural networks, but these may not capture deep nonlinearities or offer interpretability.</p>
      </section>

      <section className="paper-section">
        <h2>Proposed Methodology: KAN-Based Autoencoder Framework</h2>
        <h3>Core Idea</h3>
        <p>The authors propose embedding a <strong>KAN network</strong> inside the autoencoder framework to model the factor exposures β(Z<sub>t-1</sub>), resulting in a <strong>KAN-based conditional autoencoder (KAN-CA)</strong>:</p>
        <ul>
          <li><strong>Encoder:</strong> Compresses returns to low-dimensional latent factors</li>
          <li><strong>Decoder:</strong> Predicts returns using the latent factors and KAN-modeled exposures</li>
          <li>The KAN replaces traditional MLPs in the beta network</li>
        </ul>
        <p>This architecture leverages the expressiveness and interpretability of KANs to build more flexible, nonlinear exposure functions without sacrificing the autoencoder's ability to reconstruct returns.</p>
      </section>

      <section className="paper-section">
        <h2>Detailed Model Structure</h2>
        <h3>Beta Network via KAN</h3>
        <p>The core innovation is representing β(Z<sub>t-1</sub>) with a KAN:</p>
        <ul>
          <li>Each edge applies a parameterized spline function rather than a fixed activation</li>
          <li>Function learning occurs through training these spline parameters</li>
          <li>KAN transforms inputs with a series of univariate nonlinear transformations and sums them to approximate high-dimensional nonlinear functions</li>
          <li>The KAN is <strong>optionally wrapped with linear embedding layers</strong> for stability and performance</li>
        </ul>
        <p>Formally, let the KAN network output exposures:</p>
        <div className="formula">
          β(Z<sub>t-1</sub>) := KAN(Z<sub>t-1</sub>)
        </div>
        <p>with the KAN defined as a composition of parameterized spline layers (Φ<sub>i</sub>).</p>

        <h3>Factor Extraction</h3>
        <p>Following prior work (Gu, Kelly, Xiu 2021), factor returns are modeled as a simple linear transformation of returns:</p>
        <div className="formula">
          f<sub>t</sub> = W<sub>0</sub>r<sub>t</sub>
        </div>
        <p>This is a linear mapping from dimension-reduced characteristic portfolio returns, which preserves the <strong>economic interpretation of factors as characteristic-based portfolios</strong> while avoiding overparameterization.</p>

        <h3>Training Objective</h3>
        <p>The network is trained end-to-end by minimizing the mean squared error between predicted returns (r̂<sub>t</sub>) and observed returns (r<sub>t</sub>), jointly learning:</p>
        <ul>
          <li>KAN parameters (for β(·))</li>
          <li>Autoencoder weights for latent factors</li>
          <li>Embedding layers that map to and from latent space</li>
        </ul>
        <p>Training uses rolling windows and cross-validation to tune hyperparameters and prevent overfitting.</p>
      </section>

      <section className="paper-section">
        <h2>Data & Experimental Setup</h2>
        <h3>Dataset</h3>
        <p>The empirical evaluation uses a long history of monthly stock return data from CRSP (Center for Research in Securities Prices):</p>
        <ul>
          <li>Asset returns are excess returns (over the risk-free rate)</li>
          <li>Characteristics include lagged variables (size, book-to-market, profitability, etc.)</li>
          <li>Time period spans decades (1957–2016)</li>
          <li>Pre-processing ensures no look-ahead bias by lagging characteristics appropriately</li>
        </ul>

        <h3>Baseline Models</h3>
        <p>Comparisons are made against:</p>
        <ul>
          <li><strong>Fama-French (FF) factor models</strong> — classical linear factor models</li>
          <li><strong>Conditional Autoencoder (CA)</strong> with MLPs — existing ML approach without KAN</li>
        </ul>
        <p>Models are evaluated with <strong>1, 3, and 6 latent factors</strong> to assess performance across different complexity levels.</p>

        <h3>Evaluation Metrics</h3>
        <p>The authors evaluate models along several dimensions:</p>
        <ol>
          <li><strong>Total R²:</strong> In-sample explanatory power of factor realizations</li>
          <li><strong>Predictive R²:</strong> Out-of-sample cross-sectional return predictability</li>
          <li><strong>Sharpe Ratio:</strong> Economic value of long-short portfolios formed from model predictions</li>
        </ol>
        <p>These metrics capture both statistical and economic performance.</p>
      </section>

      <section className="paper-section">
        <h2>Results</h2>
        <h3>Statistical Fit</h3>
        <ul>
          <li>The <strong>KAN-based conditional autoencoder (KAN-CA)</strong> consistently matches or outperforms the standard CA model</li>
          <li>KAN-CA achieves competitive or superior <strong>Total R²</strong> compared to CA and significantly outperforms FF's linear factors in capturing return variation</li>
          <li>While CA and KAN-CA have similar in-sample fits, KAN-CA often edges out CA slightly across different numbers of factors (1, 3, 6)</li>
          <li><strong>Fama-French models perform poorly by comparison, with negative R² values</strong></li>
        </ul>

        <h3>Predictive Accuracy</h3>
        <ul>
          <li><strong>Predictive R²</strong> shows KAN-CA outperforming both CA and FF, implying stronger forecasting capability on future return cross sections</li>
          <li>KAN-CA achieves <strong>higher predictive R², especially for higher-factor models</strong></li>
          <li>Notably, KAN-CA's advantage grows with increased latent factor complexity, suggesting robust generalization</li>
        </ul>

        <h3>Economic Performance</h3>
        <p>When constructing long-short portfolios based on predicted returns:</p>
        <ul>
          <li>KAN-CA yields <strong>higher Sharpe ratios</strong> than CA, especially in higher factor dimensions</li>
          <li>Notably reaching <strong>Sharpe ratio of 0.96 in the 6-factor case</strong>, compared to 0.91 for CA</li>
          <li>This demonstrates <strong>practical economic value</strong> — the model's predictions can translate into better risk-adjusted performance</li>
        </ul>
        <p>Specific results show Sharpe ratios of 0.86-0.96 for KAN-CA compared to 0.84-0.91 for CA models.</p>

        <h3>Comparison with MLP-based Models</h3>
        <p>Compared to MLP-based models, KANs exhibit:</p>
        <ul>
          <li><strong>More stable training and validation loss</strong> throughout the learning process</li>
          <li><strong>Better generalization</strong> as model complexity increases</li>
          <li>Improved learning stability and convergence behavior</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Interpretability & KAN Benefits</h2>
        <p>A major claimed advantage of KAN-based models is <strong>interpretability</strong>:</p>
        <ul>
          <li>Since KAN learns explicit nonlinear univariate transformations, one can visualize how each characteristic affects factor exposures</li>
          <li>This interpretability can deepen economic insights into how characteristics drive risk compensation, a key requirement in both academic and practitioner settings</li>
          <li>MLPs, by contrast, remain more opaque ("black box") despite capturing nonlinear effects</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Limitations & Future Work</h2>
        <h3>Novelty of KANs</h3>
        <p>KANs are relatively new compared to MLPs; best practices for:</p>
        <ul>
          <li>Architecture selection</li>
          <li>Regularization strategies</li>
          <li>Training optimization</li>
        </ul>
        <p>are still under exploration. This means there may be even better KAN designs in future research.</p>

        <h3>Extension to Asset Classes</h3>
        <p>The current study focuses on equities. Potential expansions include:</p>
        <ul>
          <li>Fixed income</li>
          <li>Derivatives</li>
          <li>Multi-asset portfolios</li>
        </ul>
        <p>Understanding how KANs interact with different risk structures is an important open question.</p>

        <h3>Market Regime Robustness</h3>
        <p>Future research should examine model robustness in:</p>
        <ul>
          <li>Turbulent market phases</li>
          <li>Structural breaks</li>
          <li>High volatility regimes</li>
        </ul>
        <p>Ensuring model stability across changing dynamics remains a challenge.</p>

        <h3>Regulatory & Ethical Factors</h3>
        <p>Given KAN's interpretability edge, there is interest in:</p>
        <ul>
          <li>Regulatory compliance</li>
          <li>Explainability in automated trading</li>
          <li>Ethical considerations for model deployment — especially in high-stakes financial contexts</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Key Contributions</h2>
        <ol>
          <li><strong>Introduces KANs into asset pricing</strong> for modeling nonlinear factor exposures, replacing MLP-based beta networks with KAN representations</li>
          <li><strong>Demonstrates improved predictive accuracy and economic performance</strong> through higher predictive R² and Sharpe ratios, especially in higher-factor models</li>
          <li><strong>Enhances interpretability</strong> through spline-based representations of beta functions, enabling visualization of how characteristics affect factor exposures</li>
        </ol>
      </section>

      <section className="paper-section">
        <h2>Broader Impact</h2>
        <p>This paper advances both <em>machine learning</em> and <em>financial econometrics</em> by:</p>
        <ol>
          <li><strong>Integrating modern neural architectures</strong> (KANs) with autoencoder frameworks in asset pricing</li>
          <li><strong>Demonstrating practical value</strong> with better predictive performance and economic utility</li>
          <li><strong>Strengthening interpretability</strong>—a crucial but often neglected dimension in ML-based finance</li>
        </ol>
        <p>By offering a flexible, interpretable approach to nonlinear factor exposure modeling, this work paves the way for richer, data-driven tools in portfolio management and risk assessment.</p>
      </section>

      <section className="paper-section">
        <h2>Conclusion</h2>
        <p>The paper shows that <strong>KAN-based autoencoders</strong> provide a powerful and interpretable alternative to MLP-based factor models, offering meaningful improvements in both statistical and economic performance. This work positions KANs as a promising tool for next-generation <strong>nonlinear asset pricing models</strong>.</p>
        <p>Key takeaways:</p>
        <ul>
          <li>The paper introduces a <strong>KAN-based autoencoder</strong> for conditional factor models, replacing standard MLP exposures with KAN representations</li>
          <li><strong>Empirical results</strong> show this approach matches or exceeds existing methods in both fit and predictiveness</li>
          <li>The <strong>economic relevance</strong> is highlighted through portfolio Sharpe ratio improvements, notably reaching 0.96 in the 6-factor case</li>
          <li>The KAN framework provides a promising path toward interpretable ML in finance, bridging deep learning with economic theory and practical asset management</li>
        </ul>
      </section>
    </>
  );
};

export default KANAutoencoders;


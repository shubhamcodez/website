import React from 'react';

const TransformerEthereum = () => {
  return (
    <>
      <section className="paper-section">
        <h2>Introduction</h2>
        <p>Cryptocurrencies have evolved into a significant investment asset class, witnessing exponential market capitalization growth from millions to billions (Pele et al., 2023). Prominent digital currencies like Bitcoin and Ethereum have garnered substantial value, attracting widespread attention. This shift presents a distinctive opportunity to garner profound market insights and explore the factors driving cryptocurrency price movements.</p>
        <p>The volatile nature of cryptocurrency markets, combined with their 24/7 trading availability and sensitivity to news, social media sentiment, and cross-market correlations, makes price prediction a challenging yet valuable endeavor. Traditional financial forecasting methods often fall short when applied to cryptocurrency markets due to their unique characteristics, including high volatility, lack of traditional fundamental analysis metrics, and strong influence of market sentiment.</p>
        <p>This research addresses the challenge of Ethereum price prediction by leveraging advanced deep learning techniques, specifically transformer architectures, which have shown remarkable success in sequence modeling tasks. The approach integrates multiple data sources including historical price data, trading volume, sentiment analysis from social media and news sources, and cross-currency correlations with other major cryptocurrencies.</p>
      </section>

      <section className="paper-section">
        <h2>Objective</h2>
        <p>The paper investigates whether a Transformer neural network can be used to predict Ethereum (ETH) price movements more effectively by combining:</p>
        <ul>
          <li><strong>Time-series price & volume data:</strong> Historical ETH prices and trading volumes</li>
          <li><strong>Cross-currency correlations:</strong> Relationships between ETH and other cryptocurrencies with high correlation (e.g., ADA, DOT)</li>
          <li><strong>Market sentiment from social media:</strong> Sentiment analysis from Twitter and Reddit</li>
        </ul>
        <p>The authors hypothesize that sentiment and correlated asset behavior significantly influence price dynamics.</p>
      </section>

      <section className="paper-section">
        <h2>Methodology</h2>
        
        <h3>1. Data Inputs</h3>
        <ul>
          <li><strong>Price & Volume Data:</strong> Historical ETH prices plus other coins with high correlation (e.g., ADA, DOT)</li>
          <li><strong>Sentiment Data:</strong> Collected from Twitter and Reddit and analyzed using FinBERT (a finance-tuned transformer for sentiment scoring)</li>
          <li><strong>Dataset Size:</strong> Data spans roughly ~579 days for training and ~141 days for testing</li>
        </ul>

        <h3>2. Data Preprocessing</h3>
        <ul>
          <li><strong>Normalization:</strong> Min-max scaling for price and volume features</li>
          <li><strong>Sentiment Scoring:</strong> FinBERT outputs positive, neutral, negative scores; these are combined into a single normalized sentiment value</li>
        </ul>

        <h3>3. Model Architecture</h3>
        <ul>
          <li>A standard Transformer encoder processes sequential input features</li>
          <li>Multiple encoder layers use self-attention to capture temporal and inter-feature patterns</li>
          <li>Final outputs are pooled and mapped to predicted price values</li>
        </ul>

        <h3>4. Experimental Configurations</h3>
        <p>The authors test different feature setups:</p>
        <ul>
          <li><strong>Baseline:</strong> Only ETH price</li>
          <li><strong>Extended:</strong> ETH price + volume + sentiment</li>
          <li><strong>Full:</strong> Price, volume, sentiment + correlated coins prices</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Results</h2>
        <ul>
          <li><strong>Transformer vs. Baselines:</strong> Transformer models outperform ANN and MLP baselines on some metrics, despite a relatively small dataset and simple architecture</li>
          <li><strong>LSTM Comparison:</strong> LSTM models still perform better on key evaluation metrics (such as RMSE & MAPE) than the Transformer in these experiments</li>
          <li><strong>Feature Impact:</strong> The addition of sentiment and cross-currency features did not consistently improve prediction quality, suggesting that price movement patterns may be weakly driven by these features given the dataset limitations</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Key Insights & Conclusions</h2>
        <ul>
          <li>✅ <strong>Transformer Capability:</strong> The Transformer can capture temporal dependencies in crypto price data</li>
          <li>❗ <strong>Dataset Limitations:</strong> Model performance is limited by dataset size, especially for sentiment features</li>
          <li>💡 <strong>Illusion of Causality:</strong> Authors propose the idea of an "illusion of causality": correlations between sentiment and price don't necessarily imply strong predictive power unless backed by richer data</li>
        </ul>
        
        <h3>Future Improvements</h3>
        <p>The authors suggest future improvements could include:</p>
        <ul>
          <li>Gathering more extensive sentiment data</li>
          <li>Trying advanced time-series transformer variants (e.g., TST or Autoformer)</li>
          <li>Testing on broader correlated features and events</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Takeaway</h2>
        <p>This paper is an exploratory study showing that transformer architectures have promise for cryptocurrency price forecasting when combining multiple features — but data limitations and the weak predictive signal in sentiment/correlation make the task challenging. The research demonstrates that while transformers can effectively model temporal patterns in cryptocurrency prices, the addition of sentiment and cross-currency features requires more extensive datasets to realize their full predictive potential.</p>
      </section>
    </>
  );
};

export default TransformerEthereum;


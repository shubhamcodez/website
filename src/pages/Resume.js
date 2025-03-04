import React from 'react';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      
      <section id="skills">
        <h2>Skills & Interests</h2>
        <p><strong>Programming Languages</strong>: C++, Python, SQL</p>
        <p><strong>Libraries/Frameworks/Tools</strong>: Excel, PyTorch, TensorFlow, NumPy, SciPy, Pandas, Statsmodels, Scikit-learn, AWS/GCP, Git</p>
        <p><strong>Concepts</strong>: Machine Learning, Deep Learning, Asset Pricing, Statistical Testing, Financial Modeling, Time Series Analysis, Risk Modeling, Algorithmic Trading, Quantitative Research, Numerical Optimization, Regression Analysis</p>
      </section>
      
      <section id="experience">
        <h2>Work Experience</h2>
        <h3>Quantitative Researcher, GoQuant (Jun 2024 - Present)</h3>
        <ul>
          <li>Designed and implemented market-making strategies across 10 cryptocurrency pairs facilitating $275M in monthly volume.</li>
          <li>Led the development of high-frequency statistical arbitrage strategies on Perpetual Futures contracts, leveraging deep statistical analysis to capture micro-market inefficiencies.</li>
        </ul>
        
        <h3>Quantitative Research Analyst Intern, QuantFarming (May 2024 - Jul 2024)</h3>
        <ul>
          <li>Developed and implemented an algorithm to dynamically adjust model hyperparameters based on changing market conditions.</li>
          <li>Engineered a robust optimization and backtesting framework achieving a 37.86% increase in returns while reducing drawdown by 57.8%.</li>
          <li>Conducted comprehensive statistical analyses, including t-tests, ANOVA, and regression analysis, showcasing strong knowledge of probability and statistics.</li>
        </ul>
        
        <h3>Data Science Intern, United Nations (UNDP) (Jul 2022 - Jan 2023)</h3>
        <ul>
          <li>Applied sophisticated statistical techniques, including Seasonal and Trend decomposition using Loess (STL), to conduct trend forecasting on large-scale geospatial data.</li>
          <li>Designed web scraping scripts and applied Natural Language Processing (NLP) to extract and analyze insights, driving data-driven decision-making.</li>
          <li>Translated research findings into actionable strategies, benefiting 33,000 farmers and saving $4 million.</li>
        </ul>
      </section>
      
      <section id="projects">
        <h2>Project Experience</h2>
        <h3>Real-Time Sentiment Based Long/Short Trading</h3>
        <ul>
          <li>Developed a real-time news processing system leveraging FinBERT for entity recognition and sentiment analysis.</li>
          <li>Processed 20GB of minute-level global news data over a single day, achieving a 0.34% profit in trading backtests with a Sharpe ratio of 2.09.</li>
          <li>Utilized CUDA-based GPU acceleration and the CSP library for stream processing, minimizing latency.</li>
          <li>Reduced drawdown to 0.05%, showcasing robust risk management.</li>
        </ul>
        
        <h3>Fundamental Factor Model</h3>
        <ul>
          <li>Developed a fundamental factor model achieving an annual return of 21.1% and a Sharpe ratio of 1.109.</li>
          <li>Evaluated model performance using QLIKE random portfolio tests.</li>
        </ul>
        
        <h3>VWAP Optimal Trade Execution Model</h3>
        <ul>
          <li>Engineered a transaction cost model utilizing Almgren-Chriss methodology for guaranteed average execution pricing.</li>
          <li>Leveraged linear regression for volume forecasts and Almgren's model for impact, enabling trade execution at guaranteed VWAP prices.</li>
        </ul>
      </section>
      
      <section id="certifications">
        <h2>Certifications</h2>
        <p>Financial Engineering and Risk Management (Columbia), Financial Markets (Yale), Bloomberg Capital Markets, Quantitative Modeling and Finance for Analysts (Wharton)</p>
      </section>
    </div>
  );
}

export default Resume; 
import React from 'react';

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      
      <section id="contact">
        <h2>Shubham Singh</h2>
        <p>New York City, NY | shubham.singh@nyu.edu | 917-914-0131</p>
        <p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Github</a> | 
          <a href="https://kaggle.com/yourusername" target="_blank" rel="noopener noreferrer">Kaggle</a> | 
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://scholar.google.com/citations?user=YTCnYh4AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </p>
      </section>
      
      <section id="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Master of Science in Computer Engineering</h3>
          <p>New York University | Expected: May 2025</p>
          <p><strong>Courses:</strong> Algorithmic Trading, Stochastic Calculus, Numerical Methods, Machine Learning, High-Performance Computing</p>
        </div>
        <div className="education-item">
          <h3>Bachelor in Computer Science</h3>
          <p>Bharati Vidyapeeth University | June 2023</p>
        </div>
      </section>
      
      <section id="skills">
        <h2>Skills & Interests</h2>
        <p><strong>Programming:</strong> Python, C++, SQL, CUDA, Bash</p>
        <p><strong>Libraries:</strong> NumPy, Pandas, SciPy, Polars, Statsmodels, Scikit-learn, PyTorch, TensorFlow, Transformers, XGBoost</p>
        <p><strong>Financial Markets:</strong> Options Pricing, Statistical Arbitrage, Factor Models, Market Making, Optimal Execution</p>
        <p><strong>Tools/Infra:</strong> Docker, Kubernetes, Git, AWS, Airflow, MongoDB</p>
      </section>
      
      <section id="experience">
        <h2>Work Experience</h2>
        
        <div className="experience-item">
          <h3>Junior Quantitative Researcher, GoQuant</h3>
          <p className="date">June 2024 - Present</p>
          <ul>
            <li>Led the development of Option Trading on GoTrade Platform: 20+ strategies, payoff visualizations, position monitoring and comprehensive data insights such as options chain, funding rates, put-call ratio, etc.</li>
            <li>Designed and implemented high-frequency statistical arbitrage, funding rates arbitrage, and market-making strategies across 10 assets on OKX and Bybit, facilitating $275 million in monthly liquidity and strengthening the firm's market presence.</li>
            <li>Built Python APIs for seamless integration with the firm's C++ execution engine, accelerating new strategy rollouts and reducing development time for future projects by 70%, enabling development of strategies by quant trading team.</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <h3>AI Researcher, Artificial Intelligence Institute of South Carolina</h3>
          <p className="date">September 2024 - Present</p>
          <ul>
            <li>Conducted policy optimization research using Stanford SHP and Anthropic RLHF datasets to quantify catastrophic forgetting in Qwen 2.5 and Gemma 2, developing novel metrics for cross-task memory retention through Directed Preference Optimization.</li>
            <li>Executed systematic dealignment experiments on Qwen 1.5 utilizing hybrid SFT, SFT-DPO, DPO methodologies, implementing G-eval framework with Rate-Refer-Reconcile metrics to measure behavioral shifts under adversarial fine-tuning.</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <h3>Quantitative Research Analyst Intern, QuantFarming</h3>
          <p className="date">May 2024 - July 2024</p>
          <ul>
            <li>Developed an adaptive model parameter optimization algorithm responsive to market shifts, generating a 37.86% increase in returns and a 57.8% reduction in drawdown, balancing risk and reward effectively on $1 mn fund.</li>
            <li>Performed comprehensive statistical analyses — t-tests, ANOVA, and regression analysis with Statsmodels and Scikit-Learn—improving model precision and supporting data-driven enhancements to trading strategies.</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <h3>Data Science Intern, United Nations (UNDP)</h3>
          <p className="date">July 2022 - January 2023</p>
          <ul>
            <li>Employed Seasonal and Trend decomposition using Loess (STL) to extract trend and seasonal components from large-scale geospatial data forecasting impacts of climate change on agricultural yields resulting in actionable strategies that benefited 33,000 farmers and generated $4 million in savings.</li>
            <li>Designed web scraping scripts and implemented Natural Language Processing (NLP) with Named Entity Recognition using Selenium and NLTK, leading to a 40% increase in UNDP's digital outreach and bolstering data-driven decision-making.</li>
          </ul>
        </div>
      </section>
      
      <section id="projects">
        <h2>Projects</h2>
        <p className="project-link"><a href="/projects" target="_blank" rel="noopener noreferrer">More projects here</a></p>
        
        <div className="project-item">
          <h3>Real-Time Sentiment Trading</h3>
          <p>Developed a mid frequency sentiment analysis based trading strategy processing 20GB of news daily achieving 168% annual returns, Sharpe ratio of 2.09, and 70% latency reduction with GPU acceleration.</p>
        </div>
        
        <div className="project-item">
          <h3>Fundamental Factor Model</h3>
          <p>Created a multi-factor model yielding 21% annual return and Sharpe ratio of 1.109, optimizing portfolio allocation and validating with robust statistical tests such as mean variance, random portfolio, q tests.</p>
        </div>
        
        <div className="project-item">
          <h3>VWAP Trade Execution</h3>
          <p>Engineered a model using Almgren-Chriss model, reducing trading costs due impact to 0.01% of asset price and enhancing liquidity through accurate volume forecasting and planning optimal execution.</p>
        </div>
      </section>
      
      <section id="achievements">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          <li>CME Options Trading Challenge - Top 3%</li>
          <li>Cubist Systematic Strategies Hackathon</li>
          <li>Cornell Trading Competition</li>
          <li>Optiver - Trading at Close - Rank 824</li>
          <li>Akuna Capital Options 201</li>
          <li>Grace Hopper Scholar - NYU Tandon Delegation</li>
          <li>NPCI AI Hackathon - Winner</li>
        </ul>
      </section>
      
      <section id="publications">
        <h2>Publications</h2>
        <p><a href="https://scholar.google.com/citations?user=YTCnYh4AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar: Total Citations 13</a></p>
        <ul className="publications-list">
          <li>KAN based Autoencoders for Factor Models</li>
          <li>Transformer-based approach for Ethereum Price Prediction Using Cross-currency correlation and Sentiment Analysis</li>
          <li>Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume; 
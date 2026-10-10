import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const projectsData = [
    {
      id: 1,
      title: "Fundamental Factor Model",
      description: [
        "Developed a fundamental factor model incorporating Profitability, Dividend Yield, Value, Market Sensitivity, Medium-Term Momentum, Short-Term Momentum, Volatility, Volume, and Liquidity. Improved portfolio allocation through orthogonalization of high turnover factors, reducing risk from correlated assets and also increasing explainability of each factor's return by removing noise.",
        "Conducted cross-sectional regression to estimate factor returns, achieving an annual return of 21% and a Sharpe ratio of 1.109, with a significant R-squared metric of 0.11.",
        "Evaluated model performance using statistical tests like QLIKE random portfolio tests, minimum variance portfolio tests on complete data, and clusters of high and low turnover factors."
      ],
      keywords: "Fundamental Factor model Risk management Machine learning Quantitative portfolio construction",
      difficulty: 4.3,
      date: "2024-05-01",
      performance: 4.5
    },
    {
      id: 2,
      title: "VWAP Optimal Trade Execution Model",
      description: [
        "Engineered a predictive model to offer a guaranteed average execution price by calculating risk-adjusted costs based on variance and rate of execution θ based on the Almgren-Chriss methodology.",
        "Utilized linear regression to forecast volume at T, integrating five-day historical data within the same 30-minute windows and intra-day patterns from the preceding two periods (Ttoday-1 and Ttoday-2), for calculating volume projections.",
        "Offered trade execution at guaranteed prices with an actual trading cost of 0.01% of the asset price, hence enhancing market liquidity and offering the best prices to clients."
      ],
      keywords: "VWAP Optimal trade execution model Market impact VWAP transaction costs regression",
      difficulty: 3.1,
      date: "2024-05-15",
      performance: 4.1
    },
    {
      id: 3,
      title: "Reinforced Informed Oil Trader - RL Agent",
      description: [
        "Developed an LSTM model for forecasting oil prices by analyzing U.S. Energy and macroeconomic Indicators such as Oil production, consumption, GDP growth, Real personal income, Inflation, and Production index for monthly data over 35 years.",
        "Designed a reinforcement learning-based agent to make trading decisions based on features and signals generated achieving a Sharpe of 2.24, Sortino of 7.75, and a positive skew of 6.68 on 50-month backtesting. However, the returns were 4.15% annualized because of the slow trading rate."
      ],
      keywords: "Reinforced Informed Oil Trader RL Agent Reinforcement learning LSTM Natural Gas deep learning",
      difficulty: 3.8,
      date: "2024-03-10",
      performance: 3.4
    },
    {
      id: 4,
      title: "Equity Market Impact Model",
      description: [
        "Developed a market impact model based on Direct Estimation of Equity Market Impact (Almgren et. al) by analyzing trades and quotes millisecond-level data for 65 days data from the top 500 most liquid stocks in NYSE, utilizing daily imbalance as a proxy for trades, and separating temporary and permanent impact components.",
        "Performed non-linear regression to estimate model parameters to calculate temporary impact using Daily value traded, order flow imbalance, volatility, and volume-weighted terminal and starting prices, resulting in improved execution strategies and effective cost estimation."
      ],
      keywords: "Equity Market Impact Model Direct Estimation Equity Market Impact non-linear regression temporary permanent impact",
      difficulty: 3.1,
      date: "2024-03-25",
      performance: 3.5
    },
    {
      id: 5,
      title: "Fuzzy Binomial Option Pricing Model",
      description: [
        "Developed the Fuzzy Binomial Option Pricing Model (OPM) integrating fuzzy set theory, leading to a substantial reduction in portfolio volatility and increased stability in unpredictable markets.",
        "Implemented customized position sizing techniques based on maximum risk-optimized returns.",
        "Real-time simulations validated the model's effectiveness, consistently delivering desired risk-return profiles and significantly improving investment outcomes."
      ],
      keywords: "Fuzzy Binomial Option Pricing Model fuzzy set theory portfolio volatility stability risk-optimized returns",
      difficulty: 2.4,
      date: "2024-05-20",
      performance: 2
    },
    {
      id: 6,
      title: "DMSResNet: A Tiny Robust ResNet",
      description: [
        "Developed a novel lean ResNet architecture containing 4.3 million parameters, integrating Squeeze-Excitation blocks, mix-up data augmentation, and knowledge distillation from ResNet50, achieving 96.14% accuracy on the CIFAR-10 dataset.",
        "Used Lookahead, early stopping, and dropout to optimize the model. Tried a few more methods like random set augmentations, distillation from ResNET101, and Convolution based attention module to improve performance. Placed 4th place in NYU deep learning Cifar 10 classification competition with only ResNET models below 4.3 million parameters allowed."
      ],
      keywords: "DMSResNet Tiny Robust ResNet Optimization mobile networks deep learning neural networks",
      difficulty: 3.8,
      date: "2024-06-01",
      performance: 4
    },
    {
      id: 7,
      title: "QueryNYU - NYU Chatbot",
      description: [
        "Developed a chatbot powered by the LLAMA 7B language model fine-tuned to provide accurate responses to queries about NYU with an impressive 94% accuracy rate.",
        "Leveraged web scraping techniques to extract relevant information from NYU's database seamlessly integrating it with LLM using RAG and VectorDB using Langchain, resulting in a 92% reduction in training costs compared to conventional models while ensuring a comprehensive knowledge base."
      ],
      keywords: "QueryNYU NYU Chatbot LLAMA2-7B LlamaIndex HuggingFace Large Language Models",
      difficulty: 3.7,
      date: "2024-06-15",
      performance: 4
    },
    {
      id: 8,
      title: "Cryptocurrency Price Prediction using Transformers",
      description: [
        "Developed a transformer model leveraging sentiment analysis and cross-currency correlations to predict Ethereum prices using T-1 data from ETH, ADA, and DOT.",
        "Incorporated 5-day lagging prices of ETH, correlation scores, and normalized prices of other cryptocurrencies for enhanced prediction accuracy.",
        "Achieved superior performance over traditional models (ANN, MLP) with a Mean Absolute Error (MAE) of 0.01 and a Mean Absolute Percentage Error (MAPE) of 14.91%."
      ],
      keywords: "Cryptocurrency Price Prediction using Transformers Transformers Cryptocurrencies",
      difficulty: 3.9,
      date: "2024-07-01",
      performance: 3.2
    },
    {
      id: 9,
      title: "See Food, Know Food - A Food Item Classifier",
      description: [
        "Architected a food item classifier using MobileNetV2 architecture and fine-tuned it, achieving a remarkable 87.8% accuracy and reducing inference time by 80% in identifying 10 food classes.",
        "Architected a scalable and resource-efficient deployment by Dockerizing the app and orchestrating it on Kubernetes, resulting in a 75% reduction in memory usage and a 62.5% decrease in CPU usage under 20 concurrent users with 5 clusters."
      ],
      keywords: "See Food Know Food food item classifier TensorFlow Keras docker Kubernetes transfer learning",
      difficulty: 3.2,
      date: "2024-07-15",
      performance: 4
    },
    {
      id: 10,
      title: "Stock Screening and Analysis Dashboard",
      description: [
        "Developed a Stock Screening and Analysis Dashboard, leveraging Apache Kafka, Amazon S3, and Amazon Athena on AWS, Python, and Tableau to ingest, store, query, analyze, and visualize large amounts of historical stock data from Yahoo Finance API."
      ],
      keywords: "Stock Screening and Analysis Dashboard Kafka AWS market data analysis",
      difficulty: 2,
      date: "2024-08-01",
      performance: 2
    }
  ];

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, [projectsData]);

  useEffect(() => {
    let filtered = projects.filter(project => {
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.keywords.toLowerCase().includes(searchLower) ||
        project.description.some(desc => desc.toLowerCase().includes(searchLower))
      );
    });

    // Sort filtered projects
    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'difficulty':
            return b.difficulty - a.difficulty;
          case 'date':
            return new Date(b.date) - new Date(a.date);
          case 'performance':
            return b.performance - a.performance;
          default:
            return 0;
        }
      });
    }

    setFilteredProjects(filtered);
  }, [searchTerm, sortBy, projects]);

  return (
    <div className="container">
      <section>
        <div className="mb-4">
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search for projects.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-control sort-bar mt-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="difficulty">Sort by Difficulty</option>
            <option value="date">Sort by Newest</option>
            <option value="performance">Sort by Performance</option>
          </select>
        </div>

        <div id="projects">
          {filteredProjects.map(project => (
            <div key={project.id} className="project">
              <h2>{project.title}</h2>
              {project.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects; 
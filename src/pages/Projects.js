import React, { useState, useEffect, useRef } from 'react';
import { getProjectsData, updateProjectsData } from '../services/dataService';

function Projects() {
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [likedProjects, setLikedProjects] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Track which projects have recently had their like count updated
  const [recentlyUpdated, setRecentlyUpdated] = useState({});
  
  // Notification system for like updates
  const [notification, setNotification] = useState(null);
  
  // Previous like counts for comparison
  const prevLikeCountsRef = useRef({});
  
  // Animation state for heart
  const [animatingHeart, setAnimatingHeart] = useState(null);
  
  const projects = [
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

  // Load data from JSON on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await getProjectsData();
        setLikedProjects(data.likedProjects || []);
        setLikeCounts(data.likeCounts || {});
        prevLikeCountsRef.current = data.likeCounts || {};
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading projects data:', error);
        // Fallback to localStorage
        const savedLikedProjects = localStorage.getItem('likedProjects');
        const savedLikeCounts = localStorage.getItem('projectLikeCounts');
        
        if (savedLikedProjects) {
          setLikedProjects(JSON.parse(savedLikedProjects));
        }
        
        if (savedLikeCounts) {
          setLikeCounts(JSON.parse(savedLikeCounts));
          prevLikeCountsRef.current = JSON.parse(savedLikeCounts);
        }
        
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Save liked projects to localStorage whenever they change
  useEffect(() => {
    if (isLoading) return;
    
    // Save to localStorage as backup
    localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
    
    // We don't need to save to JSON here since handleLikeToggle already does that
    // This prevents double updates
  }, [likedProjects, isLoading]);
  
  // Save like counts to localStorage whenever they change and highlight changes
  useEffect(() => {
    if (isLoading) return;
    
    // Save to localStorage as backup
    localStorage.setItem('projectLikeCounts', JSON.stringify(likeCounts));
    
    // Check for changes and highlight them
    const updatedProjects = {};
    Object.keys(likeCounts).forEach(projectId => {
      if (prevLikeCountsRef.current[projectId] !== likeCounts[projectId]) {
        updatedProjects[projectId] = true;
      }
    });
    
    if (Object.keys(updatedProjects).length > 0) {
      setRecentlyUpdated(updatedProjects);
      
      // Clear the highlight after 2 seconds
      setTimeout(() => {
        setRecentlyUpdated({});
      }, 2000);
    }
    
    // Update the ref for next comparison
    prevLikeCountsRef.current = { ...likeCounts };
    
    // Simulate server update - in a real app, this would be an API call
    console.log('Like counts updated:', likeCounts);
  }, [likeCounts, isLoading]);
  
  // Simulate periodic updates from "server" (other users liking projects)
  useEffect(() => {
    // This simulates other users occasionally liking projects
    const simulateOtherUserActivity = () => {
      // Only simulate activity 30% of the time to make it seem more natural
      if (Math.random() > 0.7) {
        // Pick a random project
        const randomProjectId = Math.floor(Math.random() * 10) + 1;
        
        // 80% chance to increase likes, 20% chance to decrease
        const shouldIncrease = Math.random() > 0.2;
        
        setLikeCounts(prevCounts => {
          const newCounts = { ...prevCounts };
          if (shouldIncrease) {
            // Another user liked the project
            newCounts[randomProjectId] = (newCounts[randomProjectId] || 0) + 1;
            
            // Find the project title for the notification
            const project = projects.find(p => p.id === randomProjectId);
            if (project) {
              setNotification({
                type: 'like',
                message: `Someone just liked "${project.title}"`,
                timestamp: new Date()
              });
              
              // Clear notification after 3 seconds
              setTimeout(() => setNotification(null), 3000);
            }
            
            console.log(`Another user liked project ${randomProjectId}`);
          } else if (newCounts[randomProjectId] > 0) {
            // Another user unliked the project
            newCounts[randomProjectId] = Math.max(0, (newCounts[randomProjectId] || 0) - 1);
            console.log(`Another user unliked project ${randomProjectId}`);
          }
          
          // Save updated like counts to JSON directly here
          // This is a simulated server update, so we need to save it
          const saveData = async () => {
            try {
              await updateProjectsData({
                likedProjects,
                likeCounts: newCounts
              });
            } catch (error) {
              console.error('Error saving like counts from simulation:', error);
            }
          };
          
          saveData();
          
          return newCounts;
        });
      }
    };
    
    // Simulate activity every 30-60 seconds
    const intervalTime = Math.floor(Math.random() * 30000) + 30000;
    const interval = setInterval(simulateOtherUserActivity, intervalTime);
    
    return () => clearInterval(interval);
  }, [likedProjects, projects]);

  // Function to create multiple hearts for the animation
  const createHeartAnimation = () => {
    // Create an array of 5 hearts with different positions
    return Array.from({ length: 5 }, (_, index) => {
      const leftPosition = 30 + Math.random() * 40; // Random position between 30-70%
      const delay = Math.random() * 0.3; // Random delay between 0-0.3s
      
      return (
        <div 
          key={index} 
          className="heart" 
          style={{ 
            left: `${leftPosition}%`,
            animationDelay: `${delay}s`
          }}
        >
          ❤️
        </div>
      );
    });
  };

  // Enhanced like toggle function with animation
  const handleLikeToggle = (projectId) => {
    // If the user is liking (not unliking) a project, show the heart animation
    if (!likedProjects.includes(projectId)) {
      setAnimatingHeart(projectId);
      
      // Remove the animation after it completes
      setTimeout(() => {
        setAnimatingHeart(null);
      }, 1500); // Increased time to account for delays
    }
    
    // Check if the project is currently liked
    const isCurrentlyLiked = likedProjects.includes(projectId);
    
    // Update like counts first
    setLikeCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      if (isCurrentlyLiked) {
        // Decrement count when unliking
        newCounts[projectId] = Math.max(0, (newCounts[projectId] || 0) - 1);
      } else {
        // Increment count when liking
        newCounts[projectId] = (newCounts[projectId] || 0) + 1;
      }
      
      // Save updated like counts to JSON
      const saveData = async () => {
        try {
          // Calculate the new likedProjects array
          const newLikedProjects = isCurrentlyLiked 
            ? likedProjects.filter(id => id !== projectId) 
            : [...likedProjects, projectId];
            
          await updateProjectsData({
            likedProjects: newLikedProjects,
            likeCounts: newCounts
          });
        } catch (error) {
          console.error('Error saving like counts:', error);
        }
      };
      
      saveData();
      
      return newCounts;
    });
    
    // Update liked projects state after updating counts
    setLikedProjects(prevLiked => {
      return isCurrentlyLiked 
        ? prevLiked.filter(id => id !== projectId) 
        : [...prevLiked, projectId];
    });
  };

  // Generate tags from keywords
  const generateTags = (keywords) => {
    // List of important multi-word phrases to preserve as tags
    const multiWordTags = [
      "Machine learning", 
      "Reinforcement learning", 
      "Deep learning",
      "Natural language processing",
      "Computer vision",
      "Neural networks", 
      "Data science",
      "Time series",
      "Market impact",
      "Risk management",
      "Portfolio optimization",
      "Option pricing",
      "Natural Gas",
      "Real-time",
      "Transfer learning",
      "Portfolio Construction",
      "Fundamental Factor Model",
      "Quantitative portfolio construction",
      "Equity Market Impact",
      "Fuzzy Binomial Option Pricing Model",
      "Quantitative Finance",
      "Quantitative Trading",
      "VWAP Optimal Trade Execution",
      "Transaction costs",
      "Non-linear regression",
      "Fuzzy set theory",
      "Risk-optimized returns",
      "Tiny Robust ResNet",
      "Mobile networks",
      "Knowledge distillation",
      "Large Language Models",
      "Cryptocurrency Price Prediction",
      "Sentiment analysis",
      "Cross-currency correlations",
      "Food Item Classifier",
      "Stock Screening",
      "Analysis Dashboard",
      "Market data analysis",
      "Squeeze-Excitation blocks",
      "Data augmentation",
      "Almgren-Chriss methodology",
      "Order flow imbalance",
      "Execution strategies",
      "Position sizing",
      "Risk-return profiles",
      "Sharpe ratio",
      "Sortino ratio"
    ];
    
    let remainingKeywords = keywords;
    let tags = [];
    
    // Extract multi-word tags
    multiWordTags.forEach(tag => {
      const tagLower = tag.toLowerCase();
      const keywordsLower = remainingKeywords.toLowerCase();
      
      if (keywordsLower.includes(tagLower)) {
        tags.push(tag);
        // Remove the found tag from remaining keywords (case-insensitive)
        const regex = new RegExp(tag, 'i');
        remainingKeywords = remainingKeywords.replace(regex, '');
      }
    });
    
    // Process remaining single words
    const singleWordTags = remainingKeywords
      .split(' ')
      .map(word => word.trim())
      .filter(word => word.length > 3)
      // Capitalize first letter of each word
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
    // Combine multi-word and single-word tags, removing duplicates
    return [...new Set([...tags, ...singleWordTags])];
  };

  const filterProjects = () => {
    return projects.filter(project => {
      const input = searchInput.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(input);
      const keywordsMatch = project.keywords.toLowerCase().includes(input);
      const descriptionMatch = project.description.some(desc => 
        desc.toLowerCase().includes(input)
      );
      
      return titleMatch || keywordsMatch || descriptionMatch;
    });
  };

  const sortProjects = (projectsToSort) => {
    if (!sortOption) return projectsToSort;
    
    return [...projectsToSort].sort((a, b) => {
      let aValue, bValue;

      switch (sortOption) {
        case 'difficulty':
          aValue = a.difficulty;
          bValue = b.difficulty;
          break;
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'performance':
          aValue = a.performance;
          bValue = b.performance;
          break;
        case 'likes':
          aValue = likeCounts[a.id] || 0;
          bValue = likeCounts[b.id] || 0;
          break;
        default:
          return 0;
      }
      
      if (aValue > bValue) {
        return -1;
      } else if (aValue < bValue) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const filteredAndSortedProjects = sortProjects(filterProjects());

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      
      {/* Notification display */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <div className="projects-filters">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search for projects..." 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        
        <select 
          className="sort-bar" 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="difficulty">Sort by Difficulty</option>
          <option value="date">Sort by Newest</option>
          <option value="performance">Sort by Performance</option>
          <option value="likes">Sort by Most Liked</option>
        </select>
      </div>
      
      <div id="projects">
        {filteredAndSortedProjects.map(project => (
          <div 
            key={project.id} 
            className="project"
          >
            {/* Heart animation */}
            {animatingHeart === project.id && (
              <div className="heart-animation">
                {createHeartAnimation()}
              </div>
            )}
            
            <div className="project-header">
              <h2>{project.title}</h2>
              <div className="project-meta">
                <span className="project-date">{formatDate(project.date)}</span>
                <span className="project-difficulty">
                  Difficulty: {project.difficulty.toFixed(1)}
                </span>
                <span className="project-performance">
                  Performance: {project.performance.toFixed(1)}
                </span>
              </div>
            </div>
            
            <div className="project-content">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="project-footer">
              <div className="project-tags">
                {generateTags(project.keywords).slice(0, 5).map((tag, index) => (
                  <span 
                    key={index} 
                    className="project-tag" 
                    onClick={() => setSearchInput(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                className={`like-button ${likedProjects.includes(project.id) ? 'liked' : ''} ${recentlyUpdated[project.id] ? 'count-updated' : ''}`}
                onClick={() => handleLikeToggle(project.id)}
                aria-label={likedProjects.includes(project.id) ? "Unlike this project" : "Like this project"}
              >
                {likedProjects.includes(project.id) ? '❤️' : '🤍'} 
                <span className="like-text">
                  {likedProjects.includes(project.id) ? 'Liked' : 'Like'}
                </span>
                <span className="like-count">{likeCounts[project.id] || 0}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredAndSortedProjects.length === 0 && (
        <div className="no-results">
          <p>No projects found matching your search criteria.</p>
          <button 
            className="clear-search-btn"
            onClick={() => setSearchInput('')}
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects; 
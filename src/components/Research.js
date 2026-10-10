import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Research = ({ hideTitle = false }) => {
  useEffect(() => {
    // Add ScholarlyArticle schema for research papers
    const scholarlyArticles = [
      {
        "@type": "ScholarlyArticle",
        "headline": "Alignment Quality Index (AQI): Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2025",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "identifier": "arXiv:2506.13901"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Systems Engineering of Large Language Models for Enterprise Applications",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2025",
        "publisher": {
          "@type": "Organization",
          "name": "Preprints"
        }
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "KAN based Autoencoders for Factor Models",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2024",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "identifier": "arXiv:2408.02694"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "An empirical study of market risk factors for Bitcoin",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2024",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "identifier": "arXiv:2406.19401"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Transformer-based approach for ethereum price prediction using crosscurrency correlation and sentiment analysis",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2024",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "identifier": "arXiv:2401.08077"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2023",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "identifier": "arXiv:2310.08608"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana",
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU"
        },
        "datePublished": "2023",
        "publisher": {
          "@type": "Organization",
          "name": "International Journal of Engineering Applied Sciences and Technology"
        }
      }
    ];

    const researchSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Research Publications by Shubham Singh NYU",
      "about": {
        "@type": "Person",
        "name": "Shubham Singh",
        "alternateName": "Shubham Singh NYU"
      },
      "hasPart": scholarlyArticles
    };

    // Remove existing research schema
    const existingScripts = document.querySelectorAll('script[data-research-schema="true"]');
    existingScripts.forEach(script => script.remove());

    // Add research schema
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-research-schema', 'true');
    script.textContent = JSON.stringify(researchSchema);
    document.head.appendChild(script);
  }, []);

  return (
    <div className={`container ${!hideTitle ? 'research-page' : ''}`}>
      <section>
        {!hideTitle && <h1>Research</h1>}
        
        <div className="publications-box">
          <h3>Working Papers and Preprints</h3>
          <div className="publications-content">
            <ul>
              <li className="aqi-paper">
                <div className="aqi-content">
                  <div className="aqi-image">
                    <img src="/research/aqi.png" alt="Alignment Quality Index paper by Shubham Singh NYU - AI Alignment research" className="aqi-paper-image" />
                  </div>
                  <div className="aqi-text">
                    <strong>
                      <Link to="/research/alignment-quality-index" className="paper-title-link">
                        Alignment Quality Index (AQI): Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: AI Alignment, Large Language Models, Machine Learning, Deep Learning, Neural Networks, Model Evaluation, AI Safety, Computational Linguistics</span>
                    A Borah, C Sharma, D Khanna, U Bhatt, G Singh, HM Abdullah, RK Ravi, et al. <em>arXiv preprint arXiv:2506.13901, 2025</em>
                  </div>
                </div>
              </li>
              <li className="syseng-paper">
                <div className="syseng-content">
                  <div className="syseng-image">
                    <img src="/research/syseng.png" alt="Systems Engineering of Large Language Models paper by Shubham Singh NYU" className="syseng-paper-image" />
                  </div>
                  <div className="syseng-text">
                    <strong>
                      <Link to="/research/systems-engineering-llm" className="paper-title-link">
                        Systems Engineering of Large Language Models for Enterprise Applications
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: Large Language Models, Enterprise AI, Systems Engineering, Machine Learning, Natural Language Processing, Business Applications, AI Integration</span>
                    S Singh. <em>Preprints, 2025</em>
                  </div>
                </div>
              </li>
              <li className="kanfac-paper">
                <div className="kanfac-content">
                  <div className="kanfac-image">
                    <img src="/research/kanfac.png" alt="KAN based Autoencoders for Factor Models research by Shubham Singh NYU" className="kanfac-paper-image" />
                  </div>
                  <div className="kanfac-text">
                    <strong>
                      <Link to="/research/kan-autoencoders" className="paper-title-link">
                        KAN based Autoencoders for Factor Models
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: Kolmogorov-Arnold Networks, Autoencoders, Factor Models, Quantitative Finance, Machine Learning, Dimensionality Reduction, Financial Modeling</span>
                    T Wang, S Singh. <em>arXiv preprint arXiv:2408.02694, 2024</em> (2 citations)
                  </div>
                </div>
              </li>
              <li className="factorsbtc-paper">
                <div className="factorsbtc-content">
                  <div className="factorsbtc-image">
                    <img src="/research/factorsbtc.png" alt="Bitcoin market risk factors research paper by Shubham Singh NYU" className="factorsbtc-paper-image" />
                  </div>
                  <div className="factorsbtc-text">
                    <strong>
                      <Link to="/research/bitcoin-risk-factors" className="paper-title-link">
                        An empirical study of market risk factors for Bitcoin
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: Bitcoin, Cryptocurrency, Market Risk, Quantitative Finance, Financial Modeling, Risk Management, Digital Assets, Volatility Analysis</span>
                    S Singh. <em>arXiv preprint arXiv:2406.19401, 2024</em>
                  </div>
                </div>
              </li>
              <li className="transformeteth-paper">
                <div className="transformeteth-content">
                  <div className="transformeteth-image">
                    <img src="/research/transformereth.png" alt="Transformer-based Ethereum price prediction research by Shubham Singh NYU" className="transformeteth-paper-image" />
                  </div>
                  <div className="transformeteth-text">
                    <strong>
                      <Link to="/research/transformer-ethereum" className="paper-title-link">
                        Transformer-based approach for ethereum price prediction using crosscurrency correlation and sentiment analysis
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: Ethereum, Cryptocurrency, Price Prediction, Transformer Models, Sentiment Analysis, Cross-currency Correlation, Machine Learning, Deep Learning, Financial Forecasting</span>
                    S Singh, M Bhat. <em>arXiv preprint arXiv:2401.08077, 2024</em> (8 citations)
                  </div>
                </div>
              </li>
              <li className="brainvoxgen-paper">
                <div className="brainvoxgen-content">
                  <div className="brainvoxgen-image">
                    <img src="/research/brainvoxgen.png" alt="BrainVoxGen deep learning framework research by Shubham Singh" className="brainvoxgen-paper-image" />
                  </div>
                  <div className="brainvoxgen-text">
                    <strong>
                      <Link to="/research/brainvoxgen" className="paper-title-link">
                        BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: Medical Imaging, Ultrasound, MRI, Deep Learning, Image Synthesis, Computer Vision, Healthcare AI, Biomedical Engineering</span>
                    S Singh, M Bewoor, A Ranapurwala, S Rai, S Patil. <em>arXiv preprint arXiv:2310.08608, 2023</em> (3 citations)
                  </div>
                </div>
              </li>

              <li className="geo-paper">
                <div className="geo-content">
                  <div className="geo-image">
                    <img src="/research/geo.png" alt="Climate-resilient agriculture research paper by Shubham Singh" className="geo-paper-image" />
                  </div>
                  <div className="geo-text">
                    <strong>
                      <Link to="/research/climate-resilient-agriculture" className="paper-title-link">
                        Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana
                      </Link>
                    </strong>
                    <span className="keywords">Keywords: Climate Resilience, Agriculture, India, Telangana, Soil Moisture, Temperature Analysis, Precipitation, Environmental Science, Data Analysis</span>
                    S Singh. <em>International Journal of Engineering Applied Sciences and Technology 7(10), 2023</em>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;


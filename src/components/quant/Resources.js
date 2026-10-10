import React from 'react';
import QuantNavbar from '../QuantNavbar';

const Resources = () => {
  return (
    <div className="container quant-page">
      <QuantNavbar />
      <section className="quant-section mb-4">
        <h2>Quantitative Finance Resources</h2>
        <p className="lead">
          A curated collection of resources for learning quantitative finance, including books, courses, papers, and tools.
        </p>
      </section>

      <section className="quant-section resource-list-section mb-4">
        <h3>Books</h3>
        <ul className="resource-list">
          <li><strong>"Options, Futures, and Other Derivatives" by John Hull</strong> - The classic textbook on derivatives pricing</li>
          <li><strong>"Stochastic Calculus for Finance I & II" by Steven Shreve</strong> - Mathematical foundations for quantitative finance</li>
          <li><strong>"Monte Carlo Methods in Financial Engineering" by Paul Glasserman</strong> - Comprehensive guide to Monte Carlo simulation</li>
          <li><strong>"The Elements of Statistical Learning" by Hastie, Tibshirani, and Friedman</strong> - Essential for machine learning in finance</li>
          <li><strong>"Active Portfolio Management" by Grinold and Kahn</strong> - Portfolio theory and active management</li>
        </ul>
      </section>

      <section className="quant-section resource-list-section mb-4">
        <h3>Online Courses</h3>
        <ul className="resource-list">
          <li><strong>Coursera - Financial Engineering and Risk Management</strong> (Columbia University)</li>
          <li><strong>edX - Introduction to Computational Finance and Financial Econometrics</strong> (University of Washington)</li>
          <li><strong>MIT OpenCourseWare - Mathematics for Computer Science</strong></li>
          <li><strong>Stanford Online - Machine Learning</strong> (Andrew Ng)</li>
          <li><strong>QuantNet - C++ for Financial Engineering</strong></li>
        </ul>
      </section>

      <section className="quant-section resource-list-section mb-4">
        <h3>Programming Resources</h3>
        <ul className="resource-list">
          <li><strong>Python Libraries:</strong> NumPy, Pandas, SciPy, Scikit-learn, PyTorch, TensorFlow</li>
          <li><strong>C++ Libraries:</strong> Boost, QuantLib, Eigen</li>
          <li><strong>R Packages:</strong> quantmod, PerformanceAnalytics, fPortfolio</li>
          <li><strong>Julia:</strong> JuMP, DifferentialEquations.jl, Flux.jl</li>
        </ul>
      </section>

      <section className="quant-section resource-list-section mb-4">
        <h3>Research Papers</h3>
        <ul className="resource-list">
          <li><strong>"The Pricing of Options and Corporate Liabilities"</strong> - Black-Scholes Model (1973)</li>
          <li><strong>"Portfolio Selection"</strong> - Markowitz Modern Portfolio Theory (1952)</li>
          <li><strong>"A Closed-Form Solution for Options with Stochastic Volatility"</strong> - Heston Model (1993)</li>
          <li><strong>"Time Series Analysis"</strong> - Hamilton (1994)</li>
        </ul>
      </section>

      <section className="quant-section resource-list-section mb-4">
        <h3>Data Sources</h3>
        <ul className="resource-list">
          <li><strong>Yahoo Finance API</strong> - Free financial data</li>
          <li><strong>Alpha Vantage</strong> - Real-time and historical data</li>
          <li><strong>Quandl</strong> - Financial, economic, and alternative data</li>
          <li><strong>FRED</strong> - Federal Reserve Economic Data</li>
          <li><strong>Bloomberg Terminal</strong> - Professional financial data (paid)</li>
        </ul>
      </section>

      <section className="quant-section resource-list-section mb-4">
        <h3>Communities and Forums</h3>
        <ul className="resource-list">
          <li><strong>QuantNet</strong> - Quantitative finance community</li>
          <li><strong>Wilmott</strong> - Quantitative finance forum</li>
          <li><strong>Stack Overflow</strong> - Programming questions</li>
          <li><strong>Reddit r/quantfinance</strong> - Quantitative finance discussions</li>
        </ul>
      </section>
    </div>
  );
};

export default Resources; 
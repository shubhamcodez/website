import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faKaggle, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Resources() {
  return (
    <div className="quant-resources-page">
      <section className="mb-4">
        <p className="lead">
          Trying to make this the biggest repository of quantitative finance resources.
        </p>
      </section>
      
      <section className="mb-4">
        <h2>Courses</h2>
        <div className="resource-section">
          <ul>
            <li>
              <strong>Financial Engineering and Risk Management</strong> - Columbia University (Coursera)
              <p>Comprehensive introduction to financial engineering and risk management techniques.</p>
            </li>
            <li>
              <strong>Machine Learning for Trading</strong> - Georgia Tech (Udacity)
              <p>Practical course on applying ML techniques to trading strategies.</p>
            </li>
            <li>
              <strong>Computational Investing</strong> - Georgia Tech (Coursera)
              <p>Introduction to algorithmic trading and portfolio management.</p>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mb-4">
        <h2>Books</h2>
        <div className="resource-section">
          <ul>
            <li>
              <strong>Options, Futures, and Other Derivatives</strong> by John C. Hull
              <p>The classic textbook for derivatives pricing and risk management.</p>
            </li>
            <li>
              <strong>Stochastic Calculus for Finance I & II</strong> by Steven Shreve
              <p>Rigorous mathematical treatment of financial derivatives pricing.</p>
            </li>
            <li>
              <strong>The Concepts and Practice of Mathematical Finance</strong> by Mark Joshi
              <p>Excellent introduction to mathematical finance with practical applications.</p>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mb-4">
        <h2>Mock Interviews</h2>
        <a href="https://youtu.be/D9PYuMMFCpE" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Watch Interview
        </a>
      </section>

      <section className="mb-4">
        <h2>Quant Developer/ Software Developer</h2>
        <h3>Coding Questions</h3>
        <Link to="/quant/coding" className="btn btn-secondary">
          View Coding Questions
        </Link>
      </section>
    </div>
  );
}

export default Resources; 
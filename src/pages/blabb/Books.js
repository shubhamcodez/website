import React from 'react';

function Books() {
  return (
    <div className="books-container">
      <h1>Books I'm Reading</h1>
      
      <div className="books-section">
        <h2>Finance & Quantitative Analysis</h2>
        <div className="book-list">
          <div className="book-item">
            <div className="book-cover">
              <a href="https://amzn.to/41HgTFW" target="_blank" rel="noopener noreferrer">
                <img 
                  src={process.env.PUBLIC_URL + '/images/books/Mathematical Finance MJoshi.jpg'} 
                  alt="The Concepts and Practice of Mathematical Finance" 
                  onError={(e) => {e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/book-placeholder.jpg'}}
                />
              </a>
            </div>
            <div className="book-details">
              <h3>
                <a href="https://amzn.to/41HgTFW" target="_blank" rel="noopener noreferrer">
                  The Concepts and Practice of Mathematical Finance
                </a>
              </h3>
              <p className="book-author">Mark Joshi</p>
              <p className="book-description">
                A comprehensive introduction to mathematical finance, covering topics such as 
                derivatives pricing, stochastic calculus, and numerical methods. This book provides 
                both theoretical foundations and practical applications for quantitative finance.
              </p>
              <span className="book-status">Currently Reading</span>
              <p className="book-notes">
                <strong>My notes:</strong> An excellent resource for understanding the mathematical 
                foundations of modern finance. The chapters on Monte Carlo methods and interest rate 
                modeling have been particularly insightful for my research.
              </p>
              <div className="book-purchase">
                <a href="https://amzn.to/41HgTFW" target="_blank" rel="noopener noreferrer" className="purchase-button">
                  View on Amazon
                </a>
                <small className="affiliate-disclaimer">Affiliate link</small>
              </div>
            </div>
          </div>

          <div className="book-item">
            <div className="book-cover">
              <a href="https://amzn.to/4kmSFIf" target="_blank" rel="noopener noreferrer">
                <img 
                  src={process.env.PUBLIC_URL + '/images/books/Quant finance Thomas Mazzoni.jpg'} 
                  alt="A First Course in Quantitative Finance" 
                  onError={(e) => {e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/book-placeholder.jpg'}}
                />
              </a>
            </div>
            <div className="book-details">
              <h3>
                <a href="https://amzn.to/4kmSFIf" target="_blank" rel="noopener noreferrer">
                  A First Course in Quantitative Finance
                </a>
              </h3>
              <p className="book-author">Thomas Mazzoni</p>
              <p className="book-description">
                This book provides a clear and accessible introduction to the core concepts of 
                quantitative finance, including option pricing, risk management, and portfolio theory. 
                It bridges the gap between financial theory and computational implementation.
              </p>
              <span className="book-status">Currently Reading</span>
              <p className="book-notes">
                <strong>My notes:</strong> Mazzoni's approach to explaining complex financial models 
                is refreshingly clear. I've found the sections on stochastic processes particularly 
                helpful for my work on cryptocurrency price prediction.
              </p>
              <div className="book-purchase">
                <a href="https://amzn.to/4kmSFIf" target="_blank" rel="noopener noreferrer" className="purchase-button">
                  View on Amazon
                </a>
                <small className="affiliate-disclaimer">Affiliate link</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books; 
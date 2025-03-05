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
              <img 
                src={process.env.PUBLIC_URL + '/images/books/joshi.jpg'} 
                alt="The Concepts and Practice of Mathematical Finance" 
                onError={(e) => {e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/book-placeholder.jpg'}}
              />
            </div>
            <div className="book-details">
              <h3>The Concepts and Practice of Mathematical Finance</h3>
              <p className="book-author">Mark Joshi</p>
              <p className="book-description">
                A comprehensive introduction to mathematical finance, covering topics such as 
                derivatives pricing, stochastic calculus, and numerical methods. This book provides 
                both theoretical foundations and practical applications for quantitative finance.
              </p>
              <div className="book-progress">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
                <span className="progress-text">65% complete</span>
              </div>
              <p className="book-notes">
                <strong>My notes:</strong> An excellent resource for understanding the mathematical 
                foundations of modern finance. The chapters on Monte Carlo methods and interest rate 
                modeling have been particularly insightful for my research.
              </p>
            </div>
          </div>

          <div className="book-item">
            <div className="book-cover">
              <img 
                src={process.env.PUBLIC_URL + '/images/books/mazzoni.jpg'} 
                alt="A First Course in Quantitative Finance" 
                onError={(e) => {e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/book-placeholder.jpg'}}
              />
            </div>
            <div className="book-details">
              <h3>A First Course in Quantitative Finance</h3>
              <p className="book-author">Thomas Mazzoni</p>
              <p className="book-description">
                This book provides a clear and accessible introduction to the core concepts of 
                quantitative finance, including option pricing, risk management, and portfolio theory. 
                It bridges the gap between financial theory and computational implementation.
              </p>
              <div className="book-progress">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
                <span className="progress-text">40% complete</span>
              </div>
              <p className="book-notes">
                <strong>My notes:</strong> Mazzoni's approach to explaining complex financial models 
                is refreshingly clear. I've found the sections on stochastic processes particularly 
                helpful for my work on cryptocurrency price prediction.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="books-section">
        <h2>Recently Completed</h2>
        <div className="book-list">
          <div className="book-item completed">
            <div className="book-cover">
              <img 
                src={process.env.PUBLIC_URL + '/images/books/hull.jpg'} 
                alt="Options, Futures, and Other Derivatives" 
                onError={(e) => {e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/book-placeholder.jpg'}}
              />
            </div>
            <div className="book-details">
              <h3>Options, Futures, and Other Derivatives</h3>
              <p className="book-author">John C. Hull</p>
              <p className="book-description">
                A classic text on derivatives markets that covers futures, options, and other financial 
                instruments. The book provides both theoretical frameworks and practical applications.
              </p>
              <div className="book-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star half">★</span>
                <span className="rating-text">4.5/5</span>
              </div>
              <p className="book-review">
                <strong>My review:</strong> Hull's book is the definitive resource for understanding 
                derivatives. The mathematical rigor combined with practical examples makes it invaluable 
                for anyone working in quantitative finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books; 
import React, { useState, useEffect } from 'react';
// Remove the direct import and use the public path instead
// import meImage from '../images/me.jpeg';

// TypewriterEffect component for animated name with loading dash
function TypewriterEffect({ textSequence, speed = 150, cursorBlinkSpeed = 500, pauseBetween = 500 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const currentTargetText = textSequence[currentTextIndex] || '';

  // Handle the typing animation
  useEffect(() => {
    if (isTyping && !isPaused) {
      if (displayText.length < currentTargetText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTargetText.substring(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Current text is complete
        if (currentTextIndex < textSequence.length - 1) {
          // Move to next text after pause
          setIsPaused(true);
          const pauseTimeout = setTimeout(() => {
            setDisplayText('');
            setCurrentTextIndex(prev => prev + 1);
            setIsPaused(false);
          }, pauseBetween);
          return () => clearTimeout(pauseTimeout);
        } else {
          // All text sequences complete
          setIsTyping(false);
          // Set a delay before hiding the cursor
          const completeTimeout = setTimeout(() => {
            setTypingComplete(true);
          }, 1000); // Wait 1 second after typing completes before hiding cursor
          return () => clearTimeout(completeTimeout);
        }
      }
    }
  }, [displayText, isTyping, isPaused, currentTargetText, currentTextIndex, textSequence, speed, pauseBetween]);

  // Handle the cursor blinking
  useEffect(() => {
    if (typingComplete) {
      setShowCursor(false);
      return;
    }
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(interval);
  }, [cursorBlinkSpeed, typingComplete]);

  return (
    <span className="typewriter-text">
      {displayText}
      {!typingComplete && (
        <span className={`typewriter-cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
      )}
    </span>
  );
}

function Home() {
  return (
    <>
      <section>
        <h2>Hi there, I'm <TypewriterEffect textSequence={["Shubham", "Shubham Singh"]} pauseBetween={800} /></h2>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpeg'} alt="Shubham Singh" className="img" />
        </div>
        <div>
          <p>
            I'm a Computer Engineering graduate student at New York University with a passion for quantitative finance and machine learning. 
            With a strong foundation in computer science from my Bachelor's degree at Bharati Vidyapeeth University, I have focused my Master's 
            studies on algorithmic trading, stochastic calculus, and financial engineering.
          </p>
          <p>
            Currently, I'm working as a Quantitative Researcher at GoQuant and an AI Researcher at the Artificial Intelligence Institute of South Carolina.
            I'm driven by a desire to harness the power of technology and data to drive innovation in finance and artificial intelligence.
          </p>
        </div>
      </section>
      <p><br /></p>

      <section className="life-updates">
        <h3>Life Updates</h3>
        <div>
          <ul>
            <li><p>Working as a Junior Quantitative Researcher at GoQuant, developing option trading strategies and implementing high-frequency statistical arbitrage.</p></li>
            <li><p>Conducting policy optimization research at the Artificial Intelligence Institute of South Carolina, focusing on catastrophic forgetting in large language models.</p></li>
            <li><p>Expecting to complete my Master of Science in Computer Engineering at NYU in May 2025.</p></li>
          </ul>
        </div>
      </section>
      
      <p><br /></p>

      <section className="publications">
        <h3>My Publications</h3>
        <div className="publications-container">
          <ul className="publication-list">
            <li className="publication-item">
              <h4>
                <a href="https://arxiv.org/abs/2401.08077" target="_blank" rel="noopener noreferrer">
                  Transformer-based approach for ethereum price prediction using crosscurrency correlation and sentiment analysis
                </a>
              </h4>
              <p className="publication-authors">S Singh, M Bhat</p>
              <p className="publication-source">arXiv preprint arXiv:2401.08077 (2024)</p>
              <span className="publication-citations">Citations: 6</span>
            </li>
            
            <li className="publication-item">
              <h4>
                <a href="https://arxiv.org/abs/2309.04511" target="_blank" rel="noopener noreferrer">
                  Systematic Review of Techniques in Brain Image Synthesis using Deep Learning
                </a>
              </h4>
              <p className="publication-authors">S Singh, A Ranapurwala, M Bewoor, S Patil, S Rai</p>
              <p className="publication-source">arXiv preprint arXiv:2309.04511 (2023)</p>
              <span className="publication-citations">Citations: 4</span>
            </li>
            
            <li className="publication-item">
              <h4>
                <a href="https://arxiv.org/abs/2310.08608" target="_blank" rel="noopener noreferrer">
                  BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI
                </a>
              </h4>
              <p className="publication-authors">S Singh, M Bewoor, A Ranapurwala, S Rai, S Patil</p>
              <p className="publication-source">arXiv preprint arXiv:2310.08608 (2023)</p>
              <span className="publication-citations">Citations: 3</span>
            </li>
          </ul>
          
          <div className="google-scholar-link">
            <a href="https://scholar.google.com/citations?user=YTCnYh4AAAAJ" target="_blank" rel="noopener noreferrer">
              View all publications on Google Scholar (Total Citations: 13)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 
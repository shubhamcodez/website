import React from 'react';
// Remove the direct import and use the public path instead
// import meImage from '../images/me.jpeg';

function Home() {
  return (
    <>
      <section>
        <h2>Hi there, </h2>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpeg'} alt="Shubham Singh" className="img" />
        </div>
        <div>
          <p>
            Congratulations you have discovered my online den! I'm Shubham.
          </p>
          <p>A little intro about me, I'm a Computer Engineering graduate student at New York University with a passion for quantitative finance and machine learning. 
            With a strong foundation in computer science and engineering from my Bachelor's degree, I have tried to use the time during my Master's course to strengthen my knowledge and apply it in algorithmic trading, deep learning, 
            and financial engineering.
          </p>
          <p>
            I'm driven by a desire to harness the power of technology and data to drive innovation in finance. 
            My experiences as a quantitative trader intern, teaching assistant, and data science intern have 
            given me a unique perspective on the intersection of finance and technology.
          </p>
        </div>
      </section>
      <p><br /></p>

      <section className="life-updates">
        <h3>Life Updates</h3>
        <div>
          <ul>
            <li><p>Exploring the intersection of machine learning and quantitative finance. Check out my <a href="/blabb/books">reading list</a> for the books I'm currently studying.</p></li>
            <li><p>Working on a project analyzing the attribution to trend in cryptocurrency trading returns and exploring the existence of workable trading strategies.</p></li>
            <li><p>Currently working as a Quantitative Trader at Quant Farming, creating and executing trading strategies.</p></li>
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
              View all publications on Google Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 
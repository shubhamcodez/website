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
            <li><p>Currently reading <em>The Concepts and Practice of Mathematical Finance</em> by Mark Joshi and <em>A First Course in Quantitative Finance</em> by Thomas Mazzoni.</p></li>
            <li><p>Working on a project analyzing the attribution to trend in cryptocurrency trading returns and exploring the existence of workable trading strategies.</p></li>
            <li><p>Currently working as a Quantitative Trader at Quant Farming, creating and executing trading strategies.</p></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home; 
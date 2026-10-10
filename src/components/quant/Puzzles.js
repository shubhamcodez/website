import React from 'react';
import QuantNavbar from '../QuantNavbar';

const Puzzles = () => {
  return (
    <div className="container quant-page">
      <QuantNavbar />
      <section className="mb-4">
        <h2>Quantitative Puzzles</h2>
        <p className="lead">
          A collection of quantitative puzzles and brain teasers commonly used in quantitative finance interviews.
        </p>
      </section>

      <section className="mb-4">
        <h3>Probability Puzzles</h3>
        <div className="puzzle-item mb-3">
          <h4>1. Coin Toss Problem</h4>
          <p><strong>Problem:</strong> What is the probability of getting exactly 3 heads in 5 coin tosses?</p>
          <details>
            <summary>Solution</summary>
            <p>Using the binomial probability formula: P(X=k) = C(n,k) * p^k * (1-p)^(n-k)</p>
            <p>P(X=3) = C(5,3) * (0.5)^3 * (0.5)^2 = 10 * 0.125 * 0.25 = 0.3125</p>
            <p>Answer: 31.25%</p>
          </details>
        </div>

        <div className="puzzle-item mb-3">
          <h4>2. Monty Hall Problem</h4>
          <p><strong>Problem:</strong> In a game show, you pick one of three doors. Behind one is a car, behind the others are goats. After you pick, the host opens a door with a goat. Should you switch?</p>
          <details>
            <summary>Solution</summary>
            <p>Yes, you should switch. The probability of winning increases from 1/3 to 2/3 when you switch.</p>
          </details>
        </div>
      </section>

      <section className="mb-4">
        <h3>Statistics Puzzles</h3>
        <div className="puzzle-item mb-3">
          <h4>3. Mean vs Median</h4>
          <p><strong>Problem:</strong> In a dataset, the mean is 50 and the median is 45. What can you infer about the distribution?</p>
          <details>
            <summary>Solution</summary>
            <p>The distribution is right-skewed (positively skewed). When mean &gt; median, the distribution has a long right tail.</p>
          </details>
        </div>

        <div className="puzzle-item mb-3">
          <h4>4. Standard Deviation</h4>
          <p><strong>Problem:</strong> If you add 10 to every value in a dataset, what happens to the standard deviation?</p>
          <details>
            <summary>Solution</summary>
            <p>The standard deviation remains unchanged. Adding a constant to all values only shifts the distribution, it doesn't change the spread.</p>
          </details>
        </div>
      </section>

      <section className="mb-4">
        <h3>Finance Puzzles</h3>
        <div className="puzzle-item mb-3">
          <h4>5. Expected Value</h4>
          <p><strong>Problem:</strong> You can invest $1000 in a stock that has a 60% chance of returning 20% and a 40% chance of losing 10%. What's the expected return?</p>
          <details>
            <summary>Solution</summary>
            <p>Expected return = (0.6 × 0.2) + (0.4 × -0.1) = 0.12 - 0.04 = 0.08 = 8%</p>
            <p>Expected value = $1000 × 1.08 = $1080</p>
          </details>
        </div>

        <div className="puzzle-item mb-3">
          <h4>6. Portfolio Variance</h4>
          <p><strong>Problem:</strong> Two stocks have correlation 0.5, standard deviations 20% and 30%, and weights 60% and 40%. What's the portfolio standard deviation?</p>
          <details>
            <summary>Solution</summary>
            <p>σ² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂</p>
            <p>σ² = (0.6)²(0.2)² + (0.4)²(0.3)² + 2(0.6)(0.4)(0.5)(0.2)(0.3)</p>
            <p>σ² = 0.0144 + 0.0144 + 0.0144 = 0.0432</p>
            <p>σ = √0.0432 = 20.78%</p>
          </details>
        </div>
      </section>

      <section className="mb-4">
        <h3>Brain Teasers</h3>
        <div className="puzzle-item mb-3">
          <h4>7. Clock Angle</h4>
          <p><strong>Problem:</strong> What is the angle between the hour and minute hands at 3:15?</p>
          <details>
            <summary>Solution</summary>
            <p>Hour hand: 3 × 30° + 15° × 0.5° = 90° + 7.5° = 97.5°</p>
            <p>Minute hand: 15° × 6° = 90°</p>
            <p>Angle = |97.5° - 90°| = 7.5°</p>
          </details>
        </div>

        <div className="puzzle-item mb-3">
          <h4>8. Ant on a Cube</h4>
          <p><strong>Problem:</strong> An ant starts at one corner of a cube and wants to reach the opposite corner. What's the shortest path?</p>
          <details>
            <summary>Solution</summary>
            <p>Unfold the cube into a net. The shortest path is a straight line across the unfolded surface.</p>
            <p>Distance = √(1² + 2²) = √5 ≈ 2.236 units</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Puzzles; 
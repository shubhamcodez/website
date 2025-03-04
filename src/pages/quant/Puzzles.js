import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Puzzles() {
  const [expandedPuzzles, setExpandedPuzzles] = useState({});

  const togglePuzzle = (id) => {
    setExpandedPuzzles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const puzzles = [
    {
      id: 1,
      question: "You roll a fair 6-sided die twice. Calculate the probability that the value of the first roll is strictly less than the value of the second roll.",
      hint: "Draw the table of outcomes",
      solution: (
        <div>
          <p>Let's denote the first roll as X and the second roll as Y.</p>
          <p>We need to find P(X &lt; Y).</p>
          <p>Total number of possible outcomes when rolling two dice: 6 × 6 = 36</p>
          <p>Number of favorable outcomes (X &lt; Y):</p>
          <ul>
            <li>When X = 1: Y can be 2, 3, 4, 5, 6 (5 outcomes)</li>
            <li>When X = 2: Y can be 3, 4, 5, 6 (4 outcomes)</li>
            <li>When X = 3: Y can be 4, 5, 6 (3 outcomes)</li>
            <li>When X = 4: Y can be 5, 6 (2 outcomes)</li>
            <li>When X = 5: Y can be 6 (1 outcome)</li>
            <li>When X = 6: Y cannot be greater (0 outcomes)</li>
          </ul>
          <p>Total favorable outcomes: 5 + 4 + 3 + 2 + 1 = 15</p>
          <p>Therefore, P(X &lt; Y) = 15/36 = 5/12 ≈ 0.4167</p>
        </div>
      )
    },
    {
      id: 2,
      question: "You have a pile of 100 coins. 1 of the coins is an unfair coin and has heads on both sides. The remaining 99 coins are fair coins. You randomly select a coin from the pile and flip it 10 times. The coin lands heads all 10 times. Calculate the probability that the coin you selected is the unfair coin.",
      hint: "Baye's Theorem",
      solution: (
        <div>
          <p>Let's use Bayes' theorem to solve this problem.</p>
          <p>Let U be the event that we select the unfair coin.</p>
          <p>Let H10 be the event that we get 10 heads in a row.</p>
          <p>We want to find P(U | H10), the probability that the coin is unfair given that we observed 10 heads in a row.</p>
          <p>By Bayes' theorem:</p>
          <p>P(U | H10) = P(H10 | U) × P(U) / P(H10)</p>
          <p>P(U) = 1/100 (probability of selecting the unfair coin)</p>
          <p>P(H10 | U) = 1 (probability of getting 10 heads given that the coin is unfair)</p>
          <p>P(H10) = P(H10 | U) × P(U) + P(H10 | not U) × P(not U)</p>
          <p>P(H10 | not U) = (1/2)^10 = 1/1024 (probability of getting 10 heads with a fair coin)</p>
          <p>P(not U) = 99/100 (probability of selecting a fair coin)</p>
          <p>P(H10) = 1 × (1/100) + (1/1024) × (99/100) = 1/100 + 99/102400 = 1024/102400 + 99/102400 = 1123/102400</p>
          <p>P(U | H10) = (1 × 1/100) / (1123/102400) = 1/100 × 102400/1123 = 1024/1123 ≈ 0.912</p>
          <p>Therefore, the probability that the coin is unfair is approximately 0.912 or 91.2%.</p>
        </div>
      )
    },
    {
      id: 3,
      question: "Suppose you and I are playing a game, and it could be any game. We have bet 10 dollars which would go to the winner. At some point, I offer to double the bet to 20 dollars. If you accept, the game continues with the new bet. If you refuse, you lose the game, along with the original ten dollars. What is the minimum probability of winning the game that you would need to accept the increased bet?",
      hint: "To play the increased bet, gain/loss should be more than gain/loss by not playing.",
      solution: (
        <div>
          <p>Let's denote the probability of you winning the game as p.</p>
          <p>If you refuse the increased bet, you lose $10 with certainty. So your expected value is -$10.</p>
          <p>If you accept the increased bet:</p>
          <ul>
            <li>With probability p, you win $20, so your gain is $20.</li>
            <li>With probability (1-p), you lose $20, so your loss is -$20.</li>
          </ul>
          <p>Your expected value if you accept is: p × $20 + (1-p) × (-$20) = $20p - $20 + $20p = $40p - $20</p>
          <p>For accepting to be at least as good as refusing, we need:</p>
          <p>$40p - $20 ≥ -$10</p>
          <p>$40p ≥ $10</p>
          <p>p ≥ 1/4 = 0.25</p>
          <p>Therefore, you need at least a 25% chance of winning to accept the increased bet.</p>
        </div>
      )
    }
  ];

  // Add more puzzles as needed

  return (
    <div className="puzzles-page">
      <section className="mb-4">
        <p className="lead">
          Trying to make this the biggest repository of quantitative finance resources. Click on the question to see the answer.
        </p>
      </section>

      <div className="puzzle-list">
        {puzzles.map((puzzle) => (
          <div key={puzzle.id} className="puzzle-item card mb-4">
            <div 
              className="card-header d-flex justify-content-between align-items-center" 
              onClick={() => togglePuzzle(puzzle.id)}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="mb-0">{puzzle.id}. {puzzle.question}</h3>
              <FontAwesomeIcon 
                icon={expandedPuzzles[puzzle.id] ? faChevronUp : faChevronDown} 
              />
            </div>
            
            {expandedPuzzles[puzzle.id] && (
              <div className="card-body">
                <p><strong>Hint:</strong> {puzzle.hint}</p>
                <div className="solution">
                  <h4>Solution:</h4>
                  {puzzle.solution}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link to="/quant/patterns" className="btn btn-secondary">
          View Pattern Questions <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
      
      <div className="mt-4">
        <Link to="/quant/resources" className="btn btn-primary">
          Back to Resources
        </Link>
      </div>
    </div>
  );
}

export default Puzzles; 
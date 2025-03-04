import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Patterns() {
  return (
    <div className="patterns-page">
      <h2>Questions on Patterns</h2>
      
      <div className="pattern-list">
        <div className="pattern-item">
          <p>1. 14, 18, -4, 22, -26</p>
          <strong>Answer: 48.</strong> 
          <p>Explanation: Subtract second number from first number, then take negative of result.</p>
          <p>For eg: 18 - 14 = 4, hence next number = -4,<br />
             then -4 - 18 = -22, hence next number is 22,<br />
             then 22 - (-4) = 26, hence, next number is -26,<br />
             then -26 - 22 is -48, -ve of that is 48.</p>
        </div>
        
        <div className="pattern-item">
          <p>2. 3, 5, 8, 13, 21</p>
          <strong>Answer: 34.</strong> 
          <p>Explanation: Add previous number to next number. Eg: 3 + 5 = 8, 8 + 5 = 13, etc.</p>
        </div>
        
        <div className="pattern-item">
          <p>3. 1, 2, 4, 7, 11, 16</p>
          <strong>Answer: 22.</strong>
          <p>Explanation: Add integers starting from 1. 1 + <strong>1</strong> = 2, 2 + <strong>2</strong> = 4, 4 + <strong>3</strong> = 7, 16 + 6 = 22</p>
        </div>
        
        <div className="pattern-item">
          <p>4. 180, 68, 124, 196, 110, 103</p>
          <strong>Answer: 107.5.</strong>
          <p>Explanation: Difference between 180 and 68 is 112. now, divide this difference by two and flip signs at every step and add. so, 68 + -(-112)/2 = 124, 124 - 28 = 96, 96 + 14 = 110, 110 - 7 = 103</p>
        </div>
        
        <div className="pattern-item">
          <p>5. 1.5, 0.833, 0.5833, 0.45, 0.366</p>
          <strong>Answer: 0.3095</strong>
          <p>Explanation: (2n + 1) / (n(n+1))</p>
        </div>
        
        <div className="pattern-item">
          <p>6. 31, 23, 15, 27, 13, 23, 17, 11, 19, 14, 9, 15</p>
          <strong>Answer: 11</strong>
          <p>Explanation: Differences between the numbers follow this pattern: -8, -8, +12, -7, -7, + 10, -6, -6, + 8, ..., -4</p>
        </div>
        
        <div className="pattern-item">
          <p>7. 4, 20, 68, 212, 644</p>
          <strong>Answer: 1940.</strong>
          <p>Explanation: Differences are third multiples of 16. First one is +16, next is +48, next is +144, so on ...</p>
        </div>
        
        <div className="pattern-item">
          <p>8. F, S, T, F, F</p>
          <strong>Answer: S.</strong>
          <p>Explanation: Abbreviation for numbers, <strong>F</strong>irst, <strong>S</strong>econd, <strong>T</strong>hird, <strong>F</strong>ourth, <strong>F</strong>ifth, <strong>S</strong>ixth</p>
        </div>
        
        <div className="pattern-item">
          <p>9. 1, -2, 5, -12, 29, -70, 169</p>
          <strong>Answer: -408</strong>
          <p>Explanation: Multiply by -2.4 each time.</p>
        </div>
        
        <div className="pattern-item">
          <p>10. 2, 0, 1, 3, 4, 2, 3, 5, 6, 4, 5, 7, 8, 6</p>
          <strong>Answer: 7.</strong>
          <p>Explanation: Differences for this cyclical pattern, <strong>-2, +1, +2, +1, -2,</strong> +1, +2, +1, -2,</p>
        </div>
        
        <div className="pattern-item">
          <p>11. 142857, 285714, 428571, 571428, 714285</p>
          <strong>Answer: 857142.</strong>
          <p>Explanation: Just multiples of 142857.</p>
        </div>
        
        <div className="pattern-item">
          <p>12. 18, 9, 28, 14, 7, 22, 11, 34</p>
          <strong>Answer: 17.</strong>
          <p>Explanation: Divide first number by 2 to get second number.</p>
        </div>
        
        <div className="pattern-item">
          <p>13. 2, 9, 30, 93, 282</p>
          <strong>Answer: 849.</strong>
          <p>Explanation: Differences are third multiples of 7. +7, + 21, +63, + 189, +567</p>
        </div>
      </div>
      
      <div className="mt-4">
        <Link to="/quant/puzzles" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Puzzles
        </Link>
      </div>
    </div>
  );
}

export default Patterns; 
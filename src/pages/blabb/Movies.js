import React from 'react';

function Movies() {
  return (
    <div>
      <header>
        <h1>Movies I Recommend</h1>
      </header>
      <section>
        <h2>Finance Movies</h2>
        <p>Some finance movies I have watched, and my personal ratings:</p>
        <ol>
          <li>
            <div className="movie-rating">
              <span className="star">⭐⭐⭐⭐⭐</span>
              <span>The Big Short (9/10)</span>
            </div>
            <p>One of the best movies I have ever watched. Whenever I need to feel inspired, I watch it. Based on the 2008 financial crash, from the perspective of people who predicted and bet on it.</p>
          </li>
          <li>
            <div className="movie-rating">
              <span className="star">⭐⭐⭐⭐⭐</span>
              <span>Margin Call (8.7/10)</span>
            </div>
            <p>Love it, just love it. Risk management gang is my favorite. The movie is based on the 2008 crash too, from the perspective of people who failed to see it, banks who were selling mortgage swaps.</p>
          </li>
          <li>
            <div className="movie-rating">
              <span className="star">⭐⭐⭐⭐⭐</span>
              <span>Too Big to Fail (8.7/10)</span>
            </div>
            <p>A different perspective on the 2008 financial crash, and as entertaining as the rest.</p>
          </li>
          <li>
            <div className="movie-rating">
              <span className="star">⭐⭐⭐⭐</span>
              <span>Wall Street - Charlie Sheen (7.6/10)</span>
            </div>
            <p>I didn't learn much about finance, except insider trading is the way to win? Else the movie is good.</p>
          </li>  
          <li>
            <div className="movie-rating">
              <span className="star">⭐⭐⭐⭐</span>
              <span>Wall Street - Shia Lebouf (6.9/10)</span>
            </div>
            <p>A messed up emotional roller coaster. It's good but a mess.</p>
          </li>
          <li>
            <div className="movie-rating">
              <span className="star">⭐⭐⭐⭐</span>
              <span>Rogue Trader (7.8/10)</span>
            </div>
            <p>Based on real life about a guy who single-handedly destroyed Britain's oldest bank by trading without permission. Good lesson about psychology and emotion in finance.</p>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Movies; 
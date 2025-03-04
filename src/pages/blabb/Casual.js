import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faComment, faBookmark, faChartLine, faBook, faCode, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Casual() {
  const [activeSection, setActiveSection] = useState('home');
  const [blabs, setBlabs] = useState([]);
  const [newBlab, setNewBlab] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for blabs (tweets)
  useEffect(() => {
    const mockBlabs = [
      {
        id: 1,
        author: "Shubham Singh",
        content: "Just finished implementing a new trading algorithm using reinforcement learning. The results are promising with a Sharpe ratio of 2.3!",
        timestamp: "2 hours ago",
        likes: 15,
        comments: 3
      },
      {
        id: 2,
        author: "Shubham Singh",
        content: "Reading 'The Concepts and Practice of Mathematical Finance' by Mark Joshi. Highly recommend for anyone interested in quant finance.",
        timestamp: "1 day ago",
        likes: 24,
        comments: 5
      },
      {
        id: 3,
        author: "Shubham Singh",
        content: "Excited to share that my paper on market impact models has been accepted for publication! #QuantFinance #Research",
        timestamp: "3 days ago",
        likes: 42,
        comments: 7
      },
      {
        id: 4,
        author: "Shubham Singh",
        content: "Just watched 'The Big Short' again. Still one of the best finance movies ever made. What's your favorite finance movie?",
        timestamp: "1 week ago",
        likes: 31,
        comments: 12
      }
    ];

    setBlabs(mockBlabs);
    setLoading(false);
  }, []);

  // Mock data for movies
  const movies = [
    {
      id: 1,
      title: "The Big Short",
      rating: "⭐⭐⭐⭐⭐ (9/10)",
      description: "One of the best movies I have ever watched. Whenever I need to feel inspired, I watch it. Based on the 2008 financial crash, from the perspective of people who predicted and bet on it."
    },
    {
      id: 2,
      title: "Margin Call",
      rating: "⭐⭐⭐⭐⭐ (8.7/10)",
      description: "Love it, just love it. Risk management gang is my favorite. The movie is based on the 2008 crash too, from the perspective of people who failed to see it, banks who were selling mortgage swaps."
    },
    {
      id: 3,
      title: "Too Big to Fail",
      rating: "⭐⭐⭐⭐⭐ (8.7/10)",
      description: "A different perspective on the 2008 financial crash, and as entertaining as the rest."
    },
    {
      id: 4,
      title: "Wall Street - Charlie Sheen",
      rating: "⭐⭐⭐⭐ (7.6/10)",
      description: "I didn't learn much about finance, except insider trading is the way to win? Else the movie is good."
    },
    {
      id: 5,
      title: "Wall Street - Shia Lebouf",
      rating: "⭐⭐⭐⭐ (6.9/10)",
      description: "A messed up emotional roller coaster. It's good but a mess."
    },
    {
      id: 6,
      title: "Rogue Trader",
      rating: "⭐⭐⭐⭐ (7.8/10)",
      description: "Based on real life about a guy who single-handedly destroyed Britain's oldest bank by trading without permission. Good lesson about psychology and emotion in finance."
    }
  ];

  // Mock data for bookmarks
  const bookmarks = [
    {
      id: 1,
      title: "Quantitative Finance Resources",
      url: "/quant",
      description: "A collection of resources for learning quantitative finance"
    },
    {
      id: 2,
      title: "Machine Learning for Trading",
      url: "https://github.com/stefan-jansen/machine-learning-for-trading",
      description: "GitHub repository with code examples for ML in trading"
    },
    {
      id: 3,
      title: "Python for Finance",
      url: "https://www.oreilly.com/library/view/python-for-finance/9781492024323/",
      description: "Book recommendation for Python in finance applications"
    }
  ];

  const handleNewBlabChange = (e) => {
    const text = e.target.value;
    setNewBlab(text);
    setCharCount(text.length);
  };

  const handleBlabSubmit = (e) => {
    e.preventDefault();
    if (newBlab.trim() === '') return;
    
    const newBlabObj = {
      id: blabs.length + 1,
      author: "Shubham Singh",
      content: newBlab,
      timestamp: "Just now",
      likes: 0,
      comments: 0
    };
    
    setBlabs([newBlabObj, ...blabs]);
    setNewBlab('');
    setCharCount(0);
  };

  const handleLike = (id) => {
    setBlabs(blabs.map(blab => 
      blab.id === id ? {...blab, likes: blab.likes + 1} : blab
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blab-container">
      <div className="blab-sidebar">
        <h2>Blab</h2>
        <ul>
          <li 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => setActiveSection('home')}
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li 
            className={activeSection === 'quant-resources' ? 'active' : ''}
            onClick={() => setActiveSection('quant-resources')}
          >
            <FontAwesomeIcon icon={faChartLine} /> Quant Resources
          </li>
          <li 
            className={activeSection === 'movies' ? 'active' : ''}
            onClick={() => setActiveSection('movies')}
          >
            <FontAwesomeIcon icon={faFilm} /> Movies
          </li>
          <li 
            className={activeSection === 'bookmarks' ? 'active' : ''}
            onClick={() => setActiveSection('bookmarks')}
          >
            <FontAwesomeIcon icon={faBookmark} /> Bookmarks
          </li>
        </ul>
      </div>
      
      <div className="blab-main">
        {activeSection === 'home' && (
          <div className="blab-home">
            <div className="blab-compose">
              <form onSubmit={handleBlabSubmit}>
                <textarea 
                  placeholder="What's happening?" 
                  value={newBlab}
                  onChange={handleNewBlabChange}
                  maxLength={280}
                />
                <div className="blab-compose-footer">
                  <span className={charCount > 240 ? 'char-count-warning' : ''}>
                    {charCount}/280
                  </span>
                  <button type="submit" disabled={newBlab.trim() === ''}>
                    Blab
                  </button>
                </div>
              </form>
            </div>
            
            <div className="blab-feed">
              {blabs.map(blab => (
                <div key={blab.id} className="blab-post">
                  <div className="blab-post-header">
                    <strong>{blab.author}</strong>
                    <span className="blab-timestamp">{blab.timestamp}</span>
                  </div>
                  <div className="blab-post-content">
                    {blab.content}
                  </div>
                  <div className="blab-post-actions">
                    <button onClick={() => handleLike(blab.id)}>
                      ❤️ {blab.likes}
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faComment} /> {blab.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeSection === 'quant-resources' && (
          <div className="quant-resources-section">
            <h2>Quantitative Finance Resources</h2>
            <p className="mb-4">
              Welcome to my collection of resources for quantitative finance and trading. 
              Here you'll find curated learning materials, coding questions, puzzles, and pattern recognition problems 
              commonly encountered in quant interviews and trading roles.
            </p>
            
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      <FontAwesomeIcon icon={faBook} className="me-2 text-primary" />
                      Learning Resources
                    </h3>
                    <p className="card-text">
                      Curated books, courses, and interview preparation materials for quantitative finance.
                    </p>
                    <Link to="/quant/resources" className="btn btn-primary">
                      Explore Resources
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      <FontAwesomeIcon icon={faCode} className="me-2 text-success" />
                      Coding Questions
                    </h3>
                    <p className="card-text">
                      Programming challenges and algorithmic problems frequently asked in quant interviews.
                    </p>
                    <Link to="/quant/coding" className="btn btn-success">
                      Practice Coding
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      <FontAwesomeIcon icon={faPuzzlePiece} className="me-2 text-warning" />
                      Puzzles
                    </h3>
                    <p className="card-text">
                      Brain teasers and logic puzzles to sharpen your problem-solving skills.
                    </p>
                    <Link to="/quant/puzzles" className="btn btn-warning">
                      Solve Puzzles
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      <FontAwesomeIcon icon={faChartLine} className="me-2 text-info" />
                      Patterns
                    </h3>
                    <p className="card-text">
                      Pattern recognition problems to test your analytical and mathematical thinking.
                    </p>
                    <Link to="/quant/patterns" className="btn btn-info">
                      Explore Patterns
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/quant" className="btn btn-lg btn-primary">
                Visit Quant Home Page
              </Link>
            </div>
          </div>
        )}
        
        {activeSection === 'movies' && (
          <div className="blab-movies">
            <h2>Movies I Recommend</h2>
            <p>Some finance movies I have watched, and my personal ratings:</p>
            
            {movies.map(movie => (
              <div key={movie.id} className="movie-card">
                <h3>{movie.title}</h3>
                <div className="movie-rating">
                  <span className="star">{movie.rating}</span>
                </div>
                <p>{movie.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {activeSection === 'bookmarks' && (
          <div className="blab-bookmarks">
            <h2>Bookmarked Resources</h2>
            
            {bookmarks.map(bookmark => (
              <div key={bookmark.id} className="bookmark-card">
                <h3>
                  <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                    {bookmark.title}
                  </a>
                </h3>
                <p>{bookmark.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Casual; 
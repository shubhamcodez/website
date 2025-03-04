import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faPuzzlePiece, faChartLine } from '@fortawesome/free-solid-svg-icons';

function QuantHome() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="quant-home-page container py-5">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="display-4 mb-4">Quantitative Finance Resources</h1>
          <p className="lead">
            Welcome to my collection of resources for quantitative finance and trading. 
            Here you'll find curated learning materials, coding questions, puzzles, and pattern recognition problems 
            commonly encountered in quant interviews and trading roles.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className={`card h-100 ${darkMode ? 'bg-dark text-light' : ''}`}>
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faBook} size="3x" className="mb-3 text-primary" />
              <h3 className="card-title">Resources</h3>
              <p className="card-text">
                Curated books, courses, and interview preparation materials for quantitative finance.
              </p>
              <Link to="/quant/resources" className="btn btn-primary">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className={`card h-100 ${darkMode ? 'bg-dark text-light' : ''}`}>
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faCode} size="3x" className="mb-3 text-success" />
              <h3 className="card-title">Coding Questions</h3>
              <p className="card-text">
                Programming challenges and algorithmic problems frequently asked in quant interviews.
              </p>
              <Link to="/quant/coding" className="btn btn-success">
                Practice Coding
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className={`card h-100 ${darkMode ? 'bg-dark text-light' : ''}`}>
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faPuzzlePiece} size="3x" className="mb-3 text-warning" />
              <h3 className="card-title">Puzzles</h3>
              <p className="card-text">
                Brain teasers and logic puzzles to sharpen your problem-solving skills.
              </p>
              <Link to="/quant/puzzles" className="btn btn-warning">
                Solve Puzzles
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className={`card h-100 ${darkMode ? 'bg-dark text-light' : ''}`}>
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-3 text-info" />
              <h3 className="card-title">Patterns</h3>
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

      <div className="row mt-5">
        <div className="col-12">
          <div className={`p-4 rounded ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
            <h3>About Quantitative Finance</h3>
            <p>
              Quantitative finance applies mathematical models and statistical techniques to financial markets and investment management.
              Quants use programming, statistics, and financial theory to develop trading strategies, manage risk, and price complex derivatives.
            </p>
            <p>
              The resources on this site are designed to help aspiring quants prepare for interviews and develop the skills needed for a career in this field.
              Whether you're a student, a professional looking to transition into quant finance, or simply curious about the field, I hope you find these materials helpful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuantHome;
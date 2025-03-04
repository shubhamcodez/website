import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quant-resources">Quant Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/casual">Causal stuff</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 
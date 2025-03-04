import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../context/ThemeContext';
import Logo from './Logo';

function Navigation() {
  const { darkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="navbar-toggler d-md-none" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Desktop navigation */}
        <div className="desktop-nav d-none d-md-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blabb">Blab</Link>
            </li>
            <li className="nav-item d-flex align-items-center ml-2">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
        
        {/* Mobile navigation */}
        <div className={`mobile-nav d-md-none ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blabb" onClick={() => setIsMenuOpen(false)}>Blab</Link>
            </li>
            <li className="nav-item d-flex align-items-center ml-2">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 
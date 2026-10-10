import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const QuantNavbar = () => {
  const location = useLocation();

  return (
    <nav className="container-fluid quant-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quant" className={location.pathname === '/quant' ? 'active' : ''}>Overview</Link></li>
        <li><Link to="/quant/coding" className={location.pathname === '/quant/coding' ? 'active' : ''}>Coding</Link></li>
        <li><Link to="/quant/resources" className={location.pathname === '/quant/resources' ? 'active' : ''}>Resources</Link></li>
        <li><Link to="/quant/puzzles" className={location.pathname === '/quant/puzzles' ? 'active' : ''}>Puzzles</Link></li>
      </ul>
    </nav>
  );
};

export default QuantNavbar; 
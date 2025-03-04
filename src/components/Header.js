import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="text-center my-4">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>Shubham Singh</h1>
      </Link>
    </header>
  );
}

export default Header; 
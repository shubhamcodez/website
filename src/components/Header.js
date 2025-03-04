import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// This component is currently not being used for content
// It's better to remove it from App.js if it's not needed
function Header() {
  const { darkMode } = useContext(ThemeContext);
  
  return null; // Return null instead of empty fragment to avoid rendering anything
}

export default Header;
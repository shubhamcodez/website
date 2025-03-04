import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Logo() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className="logo-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
      <svg width="40" height="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              @keyframes pulse {
                0% { opacity: 0.8; }
                50% { opacity: 1; }
                100% { opacity: 0.8; }
              }
              .logo-bg {
                animation: pulse 3s infinite;
              }
            `}
          </style>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: darkMode ? '#4f46e5' : '#3b82f6', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: darkMode ? '#7c3aed' : '#2563eb', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        {/* Background shape with gradient */}
        <rect className="logo-bg" x="0" y="0" width="50" height="50" rx="10" fill="url(#grad1)" />
        
        {/* Dollar sign - centered and prominent */}
        <text x="15" y="35" fontSize="36" fontWeight="bold" fill="#ffffff">$</text>
      </svg>
      
      {/* Text part - now outside the SVG for better responsiveness */}
      <span 
        style={{ 
          marginLeft: '10px', 
          fontFamily: 'Arial, sans-serif', 
          fontWeight: 'bold',
          fontSize: '18px',
          color: darkMode ? '#ffffff' : '#3b82f6'
        }}
      >
        Shubham Singh
      </span>
    </div>
  );
}

export default Logo; 
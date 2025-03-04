import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faKaggle, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center mt-4">
      <p>&copy; {new Date().getFullYear()} Shubham Singh. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shubhamsinghnyu" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.kaggle.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link kaggle">
          <FontAwesomeIcon icon={faKaggle} />
        </a>
        <a href="https://www.youtube.com/ShubhamSinghYoutube" target="_blank" rel="noopener noreferrer" className="social-link youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 
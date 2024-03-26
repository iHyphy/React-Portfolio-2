import React from 'react';
// Import CSS module for styling if you have one
// import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div>
        {/* Link to your GitHub profile */}
        <a href="https://github.com/iHyphy" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div>
        {/* Link to your LinkedIn profile */}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div>
        {/* Link to your third platform profile, e.g., Stack Overflow */}
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;

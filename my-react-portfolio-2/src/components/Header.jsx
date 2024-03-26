import React from 'react';
import Navigation from './Navigation';
// Import CSS module for styling if you have one
// import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>My React Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

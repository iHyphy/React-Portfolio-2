import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css'; // Make sure the path is correct

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>About Me</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Portfolio</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/resume" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

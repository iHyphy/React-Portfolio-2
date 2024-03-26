import React from 'react';
import styles from '../styles/Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.heading}>Resume</h2>
      <a href="/path-to-your-resume.pdf" className={styles.downloadLink} download>Download My Resume</a>
      <div className={styles.proficienciesSection}>
        <h3>Proficiencies</h3>
        <ul className={styles.proficienciesList}>
          <li className={styles.proficiencyItem}>HTML & CSS</li>
          <li className={styles.proficiencyItem}>JavaScript (ES6+)</li>
          <li className={styles.proficiencyItem}>React</li>
          <li className={styles.proficiencyItem}>Node.js & Express</li>
          <li className={styles.proficiencyItem}>MongoDB</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Resume;

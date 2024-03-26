import React from 'react';
import styles from '../styles/Portfolio.module.css';
// Import images
import TravelForecasterImage from '../assets/TravelForecaster.png';
import TaskManagementImage from '../assets/TaskManagement.png';


const projects = [
  {
    title: 'Project 1',
    imageUrl: TravelForecasterImage, // Use imported image here
    liveUrl: 'https://ihyphy.github.io/travelerseventforecaster/',
    repoUrl: 'https://github.com/iHyphy/travelerseventforecaster',
  },
  {
    title: 'Project 2',
    imageUrl: TaskManagementImage, // Replace with import if you have the image locally
    liveUrl: 'https://task-managementt-6e5cfd5db620.herokuapp.com/login',
    repoUrl: 'https://github.com/iHyphy/task-management',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectLinks}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Live Demo
                </a>
                | 
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

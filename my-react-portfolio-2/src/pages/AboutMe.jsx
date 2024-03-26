import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <img src="/path-to-your-image.jpg" alt="Manraj Uppal" className={styles.avatar} />
      <p className={styles.bio}>
        Hi there! I'm Manraj Uppal, a web developer with a passion for building beautiful and functional web experiences. 
        I specialize in front-end development, React, and javascript. With a background in computer science, I bring a 
        unique perspective to web development, blending technical skills with creative design.
      </p>
      <p className={styles.bio}>
        Throughout my career, I've had the opportunity to work on a variety of projects, from simple websites to complex 
        web applications. I'm constantly learning new technologies and techniques to stay at the forefront of web development. 
        I'm excited to leverage my skills in this bootcamp to create engaging user experiences.
      </p>
      <p className={styles.bio}>
        When I'm not coding, you can find me playing sports or video games. I believe that a balanced life fuels creativity 
        and productivity in professional work.
      </p>
      {/* Add more paragraphs or sections as needed */}
    </div>
  );
};

export default AboutMe;

import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Simple validation checks
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email is invalid.';
    }
    if (!formData.message) errors.message = 'Message is required.';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Here, you would typically send the form data to a server or email service
      console.log('Form data:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      alert('Thank you for your message!');
    }
  };

  // Update form data as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {formErrors.name && <p className={styles.errorMessage}>{formErrors.name}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {formErrors.email && <p className={styles.errorMessage}>{formErrors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
          {formErrors.message && <p className={styles.errorMessage}>{formErrors.message}</p>}
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

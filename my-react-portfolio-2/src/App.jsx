import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/ContactForm';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <nav>
        <NavLink to="/" end>About Me</NavLink> | 
        <NavLink to="/portfolio">Portfolio</NavLink> | 
        <NavLink to="/contact">Contact</NavLink> | 
        <NavLink to="/resume">Resume</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<AboutMe />} end />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

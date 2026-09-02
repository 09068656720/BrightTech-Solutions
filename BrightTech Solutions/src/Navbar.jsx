import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={handleNavClick}>BrightTech</Link>
      </div>

      <div className="nav-controls-mobile">
        <button 
          className="theme-toggle-btn mobile-toggle" 
          onClick={toggleDarkMode} 
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} onClick={handleNavClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} onClick={handleNavClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} onClick={handleNavClick}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} onClick={handleNavClick}>
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} onClick={handleNavClick}>
            Contact
          </NavLink>
        </li>

        <li className="desktop-toggle-li">
          <button 
            className="theme-toggle-btn desktop-toggle" 
            onClick={toggleDarkMode} 
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </li>

        <li className="nav-btn-wrapper">
          <Link to="/contact" className="nav-cta-btn" onClick={handleNavClick}>
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
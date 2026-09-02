import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Building Digital Solutions That Help Your Business Grow</h1>

      <p>
        We create modern websites and digital solutions that help businesses
        build their online presence and reach more customers.
      </p>

      <div className="hero-buttons">
        <Link to="/contact" className="hero-btn">
          Get Started
        </Link>

        <Link to="/services" className="hero-btn secondary-btn">
          Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
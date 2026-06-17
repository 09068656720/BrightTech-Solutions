import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      {/* Turn the Link directly into the button class */}
      <Link to="/contact" className="hero-btn" style={{ textDecoration: 'none' }}>
        Get Started
      </Link>
    </div>
  );
};

export default Hero;
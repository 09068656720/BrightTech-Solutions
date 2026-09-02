import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Summary */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo" onClick={scrollToTop}>
            BrightTech
          </Link>
          <p className="footer-desc">
            Empowering businesses with cutting-edge digital solutions and modern software development.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/testimonials" onClick={scrollToTop}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: kamaludeenabdullah95@gmail.com</p>
          <p>Phone: +234 (0) 906 865 6720</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} BrightTech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
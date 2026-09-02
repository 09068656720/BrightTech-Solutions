import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaBullseye, FaBolt, FaShieldAlt } from 'react-icons/fa';
import './About.css';

function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation First',
      description: 'We leverage modern web technology to craft ahead-of-the-curve digital solutions.'
    },
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'To deliver high-value digital platforms that enable companies to scale effortlessly in a competitive market.'
    },
    {
      icon: <FaBolt />,
      title: 'Our Approach',
      description: 'We combine strategic planning, agile development workflows, and clean code to guarantee project success.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Why Choose Us',
      description: 'From responsive frontend engineering to dedicated client support, we prioritize quality, security, and performance.'
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Dedicated Support' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About BrightTech Solutions</h1>
        <p className="about-subtitle">
          BrightTech Solutions is a forward-thinking digital agency focused on helping businesses establish, grow, and modernize their digital presence with modern web architecture and intuitive visual design.
        </p>
      </section>

      {/* Stats Section */}
      <section className="about-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Core Company Pillars */}
      <section className="about-values-section">
        <h2 className="section-heading">Who We Are</h2>
        <div className="values-grid">
          {values.map((item, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{item.icon}</div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
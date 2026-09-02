import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaMobileAlt,
  FaServer,
  FaCheck
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Web Development',
      description: 'Custom React and modern web applications engineered for speed, security, and smooth user interaction.',
      icon: <FaLaptopCode />,
      features: ['Single Page Applications', 'API & Backend Integration', 'Responsive Design']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered web interfaces crafted with intuitive workflows, modern typography, and pixel-perfect accuracy.',
      icon: <FaPaintBrush />,
      features: ['Wireframing & Prototyping', 'Design Systems', 'User Journey Mapping']
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic online campaigns designed to boost audience engagement, capture leads, and expand brand presence.',
      icon: <FaBullhorn />,
      features: ['Social Media Strategy', 'Campaign Analytics', 'Brand Identity']
    },
    {
      title: 'SEO & Performance',
      description: 'Optimization techniques that improve search engine visibility, core web vitals, and page render speeds.',
      icon: <FaSearch />,
      features: ['On-Page SEO', 'Performance Audits', 'Speed Optimization']
    },
    {
      title: 'Mobile Optimization',
      description: 'Ensuring your web experience translates flawlessly across smartphone, tablet, and desktop display resolutions.',
      icon: <FaMobileAlt />,
      features: ['Touch Layouts', 'Cross-Browser Testing', 'Adaptive Media']
    },
    {
      title: 'Backend & APIs',
      description: 'Robust server architecture, RESTful API endpoints, and database integrations built for scale.',
      icon: <FaServer />,
      features: ['Database Architecture', 'REST APIs', 'Data Security']
    }
  ];

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="services-hero">
        <h1 className="services-title">Our Specialized Services</h1>
        <p className="services-subtitle">
          From custom frontend architecture to strategic visual design, BrightTech Solutions delivers end-to-end web engineering tailored to elevate modern businesses.
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="services-grid-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <FaCheck className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
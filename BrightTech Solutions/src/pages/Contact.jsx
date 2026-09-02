import './Contact.css';
import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaSpinner, 
  FaCheckCircle, 
  FaExclamationCircle 
} from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedName, setSubmittedName] = useState('');
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    errorMsg: ''
  });

  // Regex pattern check for valid emails
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // Clear error inline as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: false, success: false, errorMsg: '' });

    if (!validateForm()) return;

    setStatus({ submitting: true, success: false, errorMsg: '' });

    // Simulate sending request over network (2 seconds delay)
    setTimeout(() => {
      setSubmittedName(formData.name);
      setStatus({ submitting: false, success: true, errorMsg: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Let's Work Together</h1>
        <p>Have a project in mind? Tell us what you need and we'll get back to you.</p>
      </div>

      <div className="contact-wrapper">
        {/* Left Side: Information Cards */}
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email Us</h3>
              <p>Kamaludeenabdullah95@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Call Us</h3>
              <p>+234 (0) 906 865 6720</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Kano, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {status.success && (
            <div className="status-banner success-banner">
              <FaCheckCircle /> Thank you, {submittedName || 'there'}! Your message has been sent successfully.
            </div>
          )}

          {status.errorMsg && (
            <div className="status-banner error-banner">
              <FaExclamationCircle /> {status.errorMsg}
            </div>
          )}

          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject} 
              onChange={handleChange}
              className={errors.subject ? 'input-error' : ''}
            />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message..." 
              value={formData.message} 
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={status.submitting}>
            {status.submitting ? (
              <>
                <FaSpinner className="spinner" /> Sending...
              </>
            ) : (
              <>
                Send Message <FaPaperPlane style={{ marginLeft: '8px' }} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
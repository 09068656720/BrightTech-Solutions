import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been simulated as sent.`);
    // Reset form after submit
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ padding: '60px 20px', minHeight: '80vh', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" name="name" placeholder="Your Name" required
          value={formData.name} onChange={handleChange}
          style={inputStyle}
        />
        <input 
          type="email" name="email" placeholder="Email Address" required
          value={formData.email} onChange={handleChange}
          style={inputStyle}
        />
        <input 
          type="text" name="subject" placeholder="Subject" required
          value={formData.subject} onChange={handleChange}
          style={inputStyle}
        />
        <textarea 
          name="message" rows="5" placeholder="Your Message..." required
          value={formData.message} onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={{
          background: '#2563eb', color: 'white', padding: '12px', 
          border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  width: '100%'
};

export default Contact;
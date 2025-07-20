import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('https://portfolio-backend-znal.onrender.com', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <h2>Let's Connect!</h2>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and web development.
      </p>
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-item">
            <div className="icon-circle">
              <FaEnvelope className="contact-icon" />
            </div>
            <div>
              <strong>Email</strong>
              <p>vinyas05gowda@gmail.com</p>
            </div>
                </div>
          <div className="contact-item">
            <div className="icon-circle">
              <FaPhone className="contact-icon" />
            </div>
            <div>
              <strong>Phone</strong>
              <p>+91 9481123692</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-circle">
              <FaGithub className="contact-icon" />
            </div>
            <div>
              <strong>GitHub</strong>
              <p><a href="https://github.com/VinyasK" target="_blank" rel="noreferrer">github.com/VinyasK</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-circle">
              <FaLinkedin className="contact-icon" />
            </div>
            <div>
              <strong>LinkedIn</strong>
              <p><a href="https://www.linkedin.com/in/vinyas-k-9aa5832ab" target="_blank" rel="noreferrer">linkedin.com/in/vinyas-k-9aa5832ab</a></p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Contact;

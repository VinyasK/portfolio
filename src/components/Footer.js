import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Vinyas K</p>
        <p className="footer-desc">
          Computer Science & Engineering Student | Web Development Enthusiast
        </p>
        <div className="footer-icons">
          <a href="https://github.com/VinyasK" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vinyas-k-9aa5832ab" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:vinyas05gowda@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Vinyas K. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

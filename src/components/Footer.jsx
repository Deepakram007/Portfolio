import React from 'react';
import { Code, Briefcase, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="text-gradient">Deepakram S</h2>
          <p>Building the future with code.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Deepakram007" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code size={24} />
          </a>
          <a href="https://www.linkedin.com/in/deepakram-s" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Briefcase size={24} />
          </a>
          <a href="mailto:deepakrams8084@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Deepakram S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

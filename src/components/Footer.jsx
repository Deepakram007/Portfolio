import React from 'react';
import { Mail, Briefcase, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer glass-panel">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="text-gradient">Deepakram S</h2>
          <p>Building the future with code.</p>
        </div>
        <div className="footer-links-vertical">
          <a href="mailto:deepakrams8084@gmail.com" className="footer-link-item" aria-label="Email">
            <Mail size={20} />
            <span>deepakrams8084@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/deepakram-s" target="_blank" rel="noreferrer" className="footer-link-item" aria-label="LinkedIn">
            <Briefcase size={20} />
            <span>linkedin.com/in/deepakram-s</span>
          </a>
          <a href="https://github.com/Deepakram007" target="_blank" rel="noreferrer" className="footer-link-item" aria-label="GitHub">
            <Code size={20} />
            <span>github.com/Deepakram007</span>
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

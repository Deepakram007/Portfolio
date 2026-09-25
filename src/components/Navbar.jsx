import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span className="text-gradient">Deepakram S</span>
        </a>
      </div>
      
      {/* Mobile Toggle Button */}
      <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#internship" onClick={closeMenu}>Internship</a></li>
        <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
        <li className="mobile-only-contact">
          <a
            href="/Deepakram_Resume_pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </li>
        <li className="mobile-only-contact">
          <a href="#footer" onClick={closeMenu} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop-only action buttons */}
      <div className="desktop-actions">
        <a
          href="/Deepakram_Resume_pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary nav-resume-btn"
        >
          <FileText size={16} />
          <span>Resume</span>
        </a>
        <a href="#footer" className="btn-primary desktop-contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

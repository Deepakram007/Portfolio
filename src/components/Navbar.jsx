import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">
        <span className="text-gradient">Deepakram S</span>
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
        {/* Contact shown inside mobile dropdown */}
        <li className="mobile-only-contact">
          <a href="#footer" onClick={closeMenu} className="btn-primary">Contact</a>
        </li>
      </ul>

      {/* Desktop-only Contact button */}
      <a href="#footer" className="btn-primary desktop-contact">Contact</a>
    </nav>
  );
};

export default Navbar;

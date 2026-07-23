import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">
        <span className="text-gradient">Deepakram S</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
      </ul>
      <a href="mailto:deepakrams8084@gmail.com" className="btn-primary">Contact</a>
    </nav>
  );
};

export default Navbar;

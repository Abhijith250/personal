"use client";
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const setThemeColor = (color: string) => {
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--text-color', color);
  };

  return (
    <nav className="nav">
      <div className="logo">AWEBHI</div>

      {/* Hamburger icon - visible on small screens */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation links and theme switcher */}
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="theme-switcher">
          <div className="color-button" style={{ backgroundColor: '#0072b1' }} onClick={() => setThemeColor('#0072b1')}></div>
          <div className="color-button" style={{ backgroundColor: '#e63946' }} onClick={() => setThemeColor('#e63946')}></div>
          <div className="color-button" style={{ backgroundColor: '#f4a261' }} onClick={() => setThemeColor('#f4a261')}></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
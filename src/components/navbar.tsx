import React from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#hello">Main</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
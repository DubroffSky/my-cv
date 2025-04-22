import React from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#hello" onClick={(e) => handleClick(e, 'hello')}>Main</a></li>
        <li><a href="#contacts" onClick={(e) => handleClick(e, 'contacts')}>Contacts</a></li>
        <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>Services</a></li>
        <li><a href="#stack" onClick={(e) => handleClick(e, 'stack')}>Stack</a></li>
        <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
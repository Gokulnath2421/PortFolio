import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Akash's PortFolio</div>
      <ul className="nav-links">
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

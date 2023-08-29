import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>To Do List</h1>
      </div>
      <ul className="links">
        <li><a href="/">Users</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
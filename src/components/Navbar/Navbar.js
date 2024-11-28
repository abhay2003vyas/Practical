import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Final Practical of CC</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Item</Link>
      </div>
    </div>
  );
};

export default Navbar;

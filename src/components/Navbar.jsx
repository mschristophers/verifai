import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">VerifAI</NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink exact to="/" activeClassName="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/verification" activeClassName="active">Verification</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

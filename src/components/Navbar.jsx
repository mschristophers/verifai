import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/verification">Verification</Link>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './views/Dashboard.jsx';
import Verification from './views/Verification.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Dashboard} />
        <Route path="/verification" component={Verification} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

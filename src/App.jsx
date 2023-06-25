import { LitProvider } from './contexts/LitContext';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './views/Dashboard.jsx';
import Verification from './views/Verification.jsx';
import HeroSection from './components/HeroSection.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <LitProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" exact component={Dashboard} />
            <Route path="/verification" component={Verification} />
          </Routes>
          <HeroSection />
          <Footer />
        </div>
      </Router>
    </LitProvider>
  );
};

export default App;

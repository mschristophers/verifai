import React from 'react';
import Logo from '../VerifAI_Logo.png'
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <p className="hero-text">"Your Identity, Secured Across Chains"</p>
      <br /><br />
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default HeroSection;

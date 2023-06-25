import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to VerifAI</h1>
      <p className="dashboard-description">
        Dive into the new era of cross-chain identity management and verification. VerifAI is revolutionizing security, efficiency, and interoperability across various blockchain platforms.
      </p>
      <button className="dashboard-button">Begin the journey</button>
    </div>
  );
};

export default Dashboard;

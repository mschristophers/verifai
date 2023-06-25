import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './views/Dashboard.jsx';
import Verification from './views/Verification.jsx';
import './App.css';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('/');

  const renderComponent = () => {
    switch (currentRoute) {
      case '/':
        return <Dashboard />;
      case '/verification':
        return <Verification />;
      default:
        return null;
    }
  };

  return (
      <div>
        <Navbar setCurrentRoute={setCurrentRoute} />
        {renderComponent()}
        <Footer />
      </div>
  );
};

export default App;

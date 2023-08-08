import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Schedule from './Schedule';
import News from './News';
import Info from './Info'; // Import the Info component

export default function PortfolioContainer({ page, showInfo }) {
  const renderPage = () => {
    if (page === 'Home') {
      return <Home />;
    }
    if (page === 'Schedule') {
      return <Schedule />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
    if (page === 'News') {
      return <News />;
    }
  };

  return (
    <div className="landing">
      {renderPage()}
      {/* Conditionally render the Info component */}
      {showInfo && <Info />}
    </div>
  );
}

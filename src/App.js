import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './compenents/Footer';
import Header from './compenents/Header';
import PortfolioContainer from './compenents/PortolioContainer';
import Info from './compenents/Info';
import './compenents/assets/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="main-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<PortfolioContainer page="Home" showInfo={true} />}
          />
          <Route
            path="/schedule"
            element={<PortfolioContainer page="Schedule" />}
          />
          <Route
            path="/contact"
            element={<PortfolioContainer page="Contact" />}
          />
          <Route
            path="/news"
            element={<PortfolioContainer page="News" showInfo={true} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

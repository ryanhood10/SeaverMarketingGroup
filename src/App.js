import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './compenents/Footer';
import Header from './compenents/Header';
import PortfolioContainer from './compenents/PortolioContainer';
import Hero from './compenents/Hero';
import Engagement from './compenents/Engagement';
import NewsLetter from './compenents/NewsLetter';
import HeadlineCards from './compenents/HeadlineCards';
import TestimonialsPage from './compenents/Testimonials';

import './index.css';

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
            element={<React.Fragment>
              <Hero />
        <Engagement />
        <NewsLetter />
        <HeadlineCards />
            </React.Fragment>
            }
          />
          <Route
            path="/testimonials"
            element={ 
                <TestimonialsPage />
            }
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

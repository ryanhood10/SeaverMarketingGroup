import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './compenents/Footer';
import Header from './compenents/Header';
import Hero from './compenents/Hero';
import Engagement from './compenents/Engagement';
// import NewsLetter from './compenents/NewsLetter';
import HeadlineCards from './compenents/HeadlineCards';
import TestimonialsPage from './compenents/Testimonials';
import OtherHero from './compenents/OtherHero';
import Solutions from './compenents/Solutions'
import Calendly from './compenents/Calandly';
import BookAMeeting from './compenents/BookAMeeting';
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
        <HeadlineCards />
        <BookAMeeting />
        <Calendly />
        {/* <NewsLetter /> */}
            </React.Fragment>
            }
          />
          <Route
            path="/CaseStudies"
            element={ <React.Fragment>
                <OtherHero />
                <TestimonialsPage />
                </React.Fragment>
            }
          />
          <Route
            path="/solutions"
            element={<React.Fragment>
              <OtherHero />
              <Solutions />
              <BookAMeeting />
              <Calendly />
              {/* <NewsLetter /> */}
            </React.Fragment>}
          />
          <Route
            path="/contact"
            element={<React.Fragment>
              <OtherHero />
              <BookAMeeting />
              <Calendly />
              {/* <NewsLetter /> */}
            </React.Fragment>}
          />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

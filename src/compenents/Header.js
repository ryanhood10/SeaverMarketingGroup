import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/Header.css'

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className={location.pathname === '/schedule' ? 'active' : ''}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={location.pathname === '/news' ? 'active' : ''}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

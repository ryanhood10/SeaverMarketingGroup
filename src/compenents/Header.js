import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Seaver Marketing Group</h1>
        <ul className='flex hidden'>
          <li className='p-4' >
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/schedule"
              className={location.pathname === '/schedule' ? 'active' : ''}
            >
              Company
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/news"
              className={location.pathname === '/news' ? 'active' : ''}
            >
              Resources
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <AiOutlineMenu size={20} />
        </div>

        <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900'>
          <ul>
        <li className='p-4' >
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/schedule"
              className={location.pathname === '/schedule' ? 'active' : ''}
            >
              Company
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/news"
              className={location.pathname === '/news' ? 'active' : ''}
            >
              Resources
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();

  //importing state for navbar toggle
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header>
      <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Seaver Marketing Group</h1>
        <ul className='hidden md:flex'>
          <li className='p-4' >
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/solutions"
              className={location.pathname === '/schedule' ? 'active' : ''}
            >
              Solutions
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/testimonials"
              className={location.pathname === '/news' ? 'active' : ''}
            >
              Testimonials
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


        <div onClick={handleNav} className='block md:hidden fixed top-5 right-6 '>
          {/* if else statement to show navbar state */}
          {!nav ? <AiOutlineClose size={20}/> :    <AiOutlineMenu size={20} /> }
        </div>

    {/* Second menu (for side Navbar) */}

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500  z-50' : "fixed left-[-100%]"}>
                  <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Seaver Marketing Group</h1>

          <ul className='pt-12 uppercase'>
        <li className='p-4 border-b border-gray-600' >
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link
              to="/solutions"
              className={location.pathname === '/schedule' ? 'active' : ''}
            >
              Solutions
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link
              to="/testimonials"
              className={location.pathname === '/news' ? 'active' : ''}
            >
              Testimonials
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
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

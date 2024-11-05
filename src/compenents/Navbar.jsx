import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import SeaverLogo from './assets/logos/SeaverLogoNewHorizontal.png';
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
} from 'react-share';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  // URL for sharing
  const currentUrl = window.location.href;

  // Copying the URL to clipboard to invite friends
  const copyCurrentUrlToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    window.alert('URL copied! Paste and send to a friend');
  };

  return (
<header className='w-full bg-white border-b-2 border-green-700'>
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-green-800 bg-white">
        <Link to="/">
          <img
            className="pl-8 w-56 inline-block"
            src={SeaverLogo}
            alt="Seaver Marketing Logo"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex font-mono">
          <li className="p-4">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/solutions"
              className={location.pathname === '/solutions' ? 'active' : ''}
            >
              Solutions
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/CaseStudies"
              className={location.pathname === '/CaseStudies' ? 'active' : ''}
            >
              Case Studies
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="block md:hidden fixed top-5 right-6">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? 'fixed left-[-100%]'
              : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-green-700 bg-white text-green-800 ease-in-out duration-500 z-50 flex flex-col justify-between'
          }
        >
          <ul className="pt-12 uppercase">
            <li className="p-4 border-b border-green-700">
              <Link
                to="/"
                onClick={handleNav}
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-green-700">
              <Link
                to="/solutions"
                onClick={handleNav}
                className={location.pathname === '/solutions' ? 'active' : ''}
              >
                Solutions
              </Link>
            </li>
            <li className="p-4 border-b border-green-700">
              <Link
                to="/CaseStudies"
                onClick={handleNav}
                className={
                  location.pathname === '/CaseStudies' ? 'active' : ''
                }
              >
                Case Studies
              </Link>
            </li>
            <li className="p-4 border-b border-green-700">
              <Link
                to="/contact"
                onClick={handleNav}
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Share on Socials Section */}
          <div className="flex flex-col items-center py-8">
            <span className="mb-2 font-semibold">
              Had a good experience?
              <br />
              Share us on social media:
            </span>
            <div className="flex py-2 space-x-2">
              <FacebookShareButton id="facebook-button" url={currentUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <LinkedinShareButton id="linkedin-button" url={currentUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <button id="copy-link-button" onClick={copyCurrentUrlToClipboard}>
                <AiOutlineClose size={25} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { link: 'Home', path: '/home' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className='w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-5 flex justify-between items-center shadow-lg z-50'>
        <Link to="/home" className='text-white font-bold text-2xl flex items-center space-x-2'>
          <FaBook className='text-white text-3xl' />
          <span>Book-Store</span>
        </Link>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <FaBars className='text-white text-2xl' />
          </button>
        </div>
        <div className={`flex-col md:flex md:flex-row md:space-x-14 ${isOpen ? 'flex' : 'hidden'} md:block`}>
          {
            navItems.map((x, index) => (
              <Link key={index} to={x.path} className='text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-300 mt-4 md:mt-0'>
                {x.link}
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

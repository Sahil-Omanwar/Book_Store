import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { link: 'Home', path: '/home' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' }
  ];

  return (
    <header>
      <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-5 flex justify-around items-center shadow-lg z-50'>
        <a href="/home" className='text-white font-bold text-3xl flex items-center space-x-2 pr-20'>
          <FaBook className='text-white text-4xl' />
          <span>Book-Store</span>
        </a>
        <div className='flex space-x-14'>
          {
            navItems.map((x, index) => (
              <Link key={index} to={x.path} className='text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-300'>
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

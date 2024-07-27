import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
        <div className='flex flex-col items-start pl-5'>
          <h1 className='text-2xl font-bold mb-2 '>Book-Store</h1>
          <p className='text-gray-400'>Your go-to place for searching books</p>
        </div>
        <div className='flex flex-col items-start'>
          <h1 className='text-xl font-semibold mb-2'>Contact Us</h1>
          <p className='text-gray-400'>Pune</p>
          <a href='mailto:sahilomanwar@gmail.com' className='text-blue-400 hover:underline'>Mail Us</a>
        </div>
        <div className='flex flex-col items-start'>
          <h1 className='text-xl font-semibold mb-2'>Address</h1>
          <p className='text-gray-400'>DR D.Y. Patil Institute of Technology, Pimpri</p>
        </div>
        <div className='flex flex-col items-start'>
          <h1 className='text-xl font-semibold mb-2'>Follow Us</h1>
          <div className='flex space-x-4'>
            <Link to={'https://www.instagram.com/sahilomanwar/'} target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-2xl hover:text-pink-500' />
            </Link>
            <Link to={'https://x.com/4_Bytesss/'} target="_blank" rel="noopener noreferrer">
              <FaTwitter className='text-2xl hover:text-blue-400' />
            </Link>
            <Link to={'https://github.com/Sahil-Omanwar'} target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-2xl hover:text-gray-400' />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-center mt-8'>
        <p className='text-gray-400'>© 2024 Book-Store. All rights reserved.</p>
        <p className='text-gray-400'>Made By:Sahil Omanwar</p>
      </div>
    </div>
  );
}

export default Footer;
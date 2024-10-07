import React from 'react';
import { Link } from 'react-router-dom';
import allb from '../assets/allbook.jpg';

const OurSelf = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 p-10'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-blue-800'>Who are we?</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex justify-center items-center'>
          <img src={allb} alt="Books" className='w-full md:w-3/4 h-auto rounded-lg shadow-md' />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-semibold text-gray-800'>Find your Book</h1>
          <h1 className='text-3xl font-semibold text-blue-600 mb-4'>HERE!!!</h1>
          <p className='text-gray-600 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim inventore cum. 
            Harum voluptate numquam recusandae eaque, similique ab reiciendis officia, natus veniam dolores ducimus eveniet id laboriosam, sunt vero?
          </p>
          <div className='grid grid-cols-3 gap-4'>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-blue-800'>800+</h1>
              <p className='text-gray-600'>Book Listings</p>
            </div>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-blue-800'>500+</h1>
              <p className='text-gray-600'>Registered users</p>
            </div>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-blue-800'>1500+</h1>
              <p className='text-gray-600'>Site Views</p>
            </div>
          </div>
          <div className='mt-8 text-center'>
            <Link to='/shop'>
              <button className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'>Explore More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSelf;

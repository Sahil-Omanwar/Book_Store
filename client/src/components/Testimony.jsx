import React from 'react';
import test1 from '../assets/test1.jpg';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg';

const Testimony = () => {
  return (
    <div className='bg-blue-50 p-5 md:p-10'>
      <h1 className='text-4xl font-bold text-blue-800 text-center mb-8'>Testimonials</h1>
      <div className='flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8'>
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3'>
          <img src={test1} alt="Krishna" className='w-32 h-32 object-cover rounded-full mb-4 border-2 border-blue-200'/>
          <h1 className='text-2xl font-semibold text-blue-600 mb-2'>Krishna</h1>
          <p className='text-gray-600 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, inventore.
          </p>
        </div>
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3'>
          <img src={test2} alt="Kim" className='w-32 h-32 object-cover rounded-full mb-4 border-2 border-blue-200'/>
          <h1 className='text-2xl font-semibold text-blue-600 mb-2'>Kim</h1>
          <p className='text-gray-600 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, inventore.
          </p>
        </div>
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3'>
          <img src={test3} alt="Micheal" className='w-32 h-32 object-cover rounded-full mb-4 border-2 border-blue-200'/>
          <h1 className='text-2xl font-semibold text-blue-600 mb-2'>Micheal</h1>
          <p className='text-gray-600 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, inventore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimony;

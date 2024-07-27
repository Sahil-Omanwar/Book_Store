import React from 'react'
import harry from '../assets/harry.jpg'
import manSearch from '../assets/mansearchfor.jpg'
import psy from '../assets/psycologymoney.jpg'
import kite from '../assets/thekiterunner.jpg'
import thinkGrow from '../assets/tngr.jpg'
import howtoWin from '../assets/download.png'
import moking from '../assets/tokill.jpg'
import world from '../assets/world.jpg'

const FavouriteBook = () => {
  return (
    <div className='bg-white p-6'>
      <div className='text-center mb-16'> {/* Increased the bottom margin */}
        <h1 className='text-4xl font-bold text-blue-800'>Favourite Books</h1>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <div className='text-center'>
          <img src={harry} alt="Harry Potter" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>Harry Potter</h2>
          <h2 className='text-sm text-gray-500'>by J.K. Rowling</h2>
        </div>
        <div className='text-center'>
          <img src={manSearch} alt="Man's Search for Meaning" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>Man's Search for Meaning</h2>
          <h2 className='text-sm text-gray-500'>by Viktor E. Frankl</h2>
        </div>
        <div className='text-center'>
          <img src={psy} alt="Psychology of Money" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>Psychology of Money</h2>
          <h2 className='text-sm text-gray-500'>by Morgan Housel</h2>
        </div>
        <div className='text-center'>
          <img src={kite} alt="The Kite Runner" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>The Kite Runner</h2>
          <h2 className='text-sm text-gray-500'>by Khaled Hosseini</h2>
        </div>
        <div className='text-center'>
          <img src={thinkGrow} alt="Think and Grow Rich" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>Think and Grow Rich</h2>
          <h2 className='text-sm text-gray-500'>by Napoleon Hill</h2>
        </div>
        <div className='text-center'>
          <img src={howtoWin} alt="How to Win Friends and Influence People" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>How to Win Friends and Influence People</h2>
          <h2 className='text-sm text-gray-500'>by Dale Carnegie</h2>
        </div>
        <div className='text-center'>
          <img src={moking} alt="To Kill a Mockingbird" className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>To Kill a Mockingbird</h2>
          <h2 className='text-sm text-gray-500'>by Harper Lee</h2>
        </div>
        <div className='text-center'>
          <img src={world} alt='' className='mx-auto h-48 w-32 object-cover' />
          <h2 className='mt-4 text-lg font-semibold text-gray-700'>World War Z</h2>
          <h2 className='text-sm text-gray-500'>by Max Brooks</h2>
        </div>
      </div>
    </div>
  )
}

export default FavouriteBook

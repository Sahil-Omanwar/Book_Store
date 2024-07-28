/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import bookImage from '../assets/boo2.avif';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/book/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className='h-screen'>
      <div className='grid grid-cols-3 items-center bg-white h-3/4'>
        <div className='pl-40 col-span-2 space-y-4'>
          <h1 className='text-6xl text-blue-500'>Book-store Library</h1>
          <p className='text-purple-950'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et odio quibusdam ratione fuga quos eos beatae dignissimos, autem enim quasi quod mollitia porro distinctio nulla quo perspiciatis natus est reiciendis commodi pariatur? Alias enim ullam sunt laboriosam eum tempore, voluptatum dolores quam quis tenetur totam porro quia optio consectetur.
          </p>
          <div className='relative flex items-center'>
            <input
              type="search"
              placeholder='Search Book here'
              name='search'
              id='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='bg-blue-100 rounded-l-sm h-12 w-80 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <button
              className='bg-blue-500 text-white rounded-r-sm h-12 px-4 flex items-center hover:bg-blue-600 transition duration-300'
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className='flex justify-center pt-36'>
          <img src={bookImage} alt="Image of books stacked above each other" className='w-full h-auto pb-4' />
        </div>
      </div>
    </div>
  );
}

export default Banner; */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import bookImage from '../assets/boo2.avif';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/book/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className='h-screen'>
      <div className='grid grid-cols-3 items-center bg-white h-3/4'>
        <div className='pl-40 col-span-2 space-y-4'>
          <h1 className='text-6xl text-blue-500'>Book-store Library</h1>
          <p className='text-purple-950'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et odio quibusdam ratione fuga quos eos beatae dignissimos, autem enim quasi quod mollitia porro distinctio nulla quo perspiciatis natus est reiciendis commodi pariatur? Alias enim ullam sunt laboriosam eum tempore, voluptatum dolores quam quis tenetur totam porro quia optio consectetur.
          </p>
          <div className='relative flex items-center'>
            <input
              type="search"
              placeholder='Search Book here'
              name='search'
              id='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='bg-blue-100 rounded-l-sm h-12 w-80 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <button
              className='bg-blue-500 text-white rounded-r-sm h-12 px-4 flex items-center hover:bg-blue-600 transition duration-300'
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className='flex justify-center pt-36'>
          <img src={bookImage} alt="Image of books stacked above each other" className='w-full h-auto pb-4' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
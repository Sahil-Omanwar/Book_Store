import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCartArrowDown } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BookCards = ({ headline, books }) => {
  const fixedHeight = 400; // Set the desired height for the images

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold  text-indigo-500 my-5'>{headline}</h2>

      {/* cards */}
      <div className="mt-10"> {/* Added margin-top */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map(book => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`} className="flex flex-col items-center">
                <div style={{ height: `${fixedHeight}px` }} className="w-full overflow-hidden relative">
                  <img 
                    src={book.imageUrl} 
                    alt={book.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className='absolute top-2 right-2 bg-blue-600 hover:bg-black p-2 rounded'>
                      <FaCartArrowDown className='w-4 h-4 text-white' />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-indigo-500">{book.name}</h3> {/* Different color for book name */}
                  <p className="text-gray-400">{book.author}</p> {/* Different color for author */}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;

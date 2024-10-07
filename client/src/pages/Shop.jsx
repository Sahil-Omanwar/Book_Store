import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://book-store-backend-2sci.onrender.com/book/all-books'); // Replace with your actual API endpoint
        setBooks(response.data);
      } catch (error) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-5 md:p-10 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900"></h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="text-center p-4 bg-white shadow-md rounded transition-transform transform hover:scale-105">
            <img src={book.imageUrl} alt={book.title} className="w-32 h-48 md:w-40 md:h-60 object-cover mb-4 mx-auto" />
            <p className="text-blue-900 text-lg md:text-xl font-semibold">{book.title}</p>
            <p className="text-gray-700 text-sm md:text-base">{book.author}</p>
            <p className="text-green-700 text-md md:text-lg font-bold">Price: ${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams(); // Get the ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://book-store-backend-2sci.onrender.com/book/getBook/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBook(data.book);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-10 pb-10 md:pt-16 md:pb-16">
      {book ? (
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-lg md:max-w-2xl w-full mt-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">{book.name}</h1>
          <div className="flex justify-center mb-4">
            <img 
              src={book.imageUrl} 
              alt={book.name} 
              className="w-48 h-72 md:w-64 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700 mb-2">Author: {book.author}</p>
            <p className="text-lg font-medium text-gray-700 mb-2">Genre: {book.genre}</p>
            <p className="text-md text-gray-600 mb-4">{book.description}</p>
            <a 
              href={book.bookPdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            >
              Read Book
            </a>
          </div>
        </div>
      ) : (
        <p>No book found</p>
      )}
    </div>
  );
};

export default SingleBook;

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
        const response = await fetch(`http://localhost:8080/book/getBook/${id}`);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-16 pb-16"> {/* Added pt-16 and pb-16 for top and bottom padding */}
      {book ? (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full mt-16 mb-16"> {/* Added mt-16 and mb-16 for top and bottom margin */}
          <h1 className="text-3xl font-bold text-center mb-4">{book.name}</h1>
          <div className="flex justify-center mb-4">
            <img 
              src={book.imageUrl} 
              alt={book.name} 
              className="w-64 h-96 object-cover rounded-lg shadow-md"
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

import React, { useState, useEffect } from 'react';
import BookCards from './BookCards';

const BestSeller = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://book-store-backend-2sci.onrender.com/book/all-books')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 p-4 sm:p-6 md:p-10">
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSeller;

import React, { useState, useEffect } from 'react';
import BookCards from './BookCards';

const BestSeller = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/book/all-books')
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 p-10">
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSeller;

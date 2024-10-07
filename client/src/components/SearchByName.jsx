import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchByName = () => {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      if (name) {
        try {
          const response = await axios.get(`https://book-store-backend-2sci.onrender.com/book/search/${name}`);
          setBooks(response.data);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert('No such Book Found');
          } else {
            alert('Failed to fetch book details');
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBooks();
  }, [name]);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-5 md:p-10 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Book Details</h1>
      </div>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book._id} className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-2/3">
                <h2 className="text-3xl font-semibold text-blue-900 mb-2">{book.title}</h2>
                <p className="text-gray-700 text-md mb-4"><strong>Author:</strong> {book.author}</p>
                <p className="text-gray-700 text-md mb-4"><strong>Description:</strong> {book.description}</p>
                <p className="text-gray-700 text-md mb-4"><strong>Genre:</strong> {book.genre}</p>
                <p className="text-green-700 text-md font-bold mb-4"><strong>Price:</strong> ${book.price}</p>
                <a href={book.bookPdfUrl} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Read Book</a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-10 text-lg">No books found</div>
      )}
    </div>
  );
}

export default SearchByName;

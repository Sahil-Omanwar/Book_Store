import React from 'react';

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-10 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-white p-8 bg-blue-900 bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About Our Bookstore</h1>
        <p className="text-lg mb-4">
          Welcome to our Bookstore, your number one source for all kinds of books. We're dedicated to providing you the best of books, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p className="text-lg mb-4">
          Founded in [Year], our Bookstore has come a long way from its beginnings. When we first started out, our passion for books drove us to start our own business.
        </p>
        <p className="text-lg mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-lg mb-4">
          Sincerely,<br />
          Sahil Omanwar, Founder
        </p>
      </div>
    </div>
  );
};

export default About;

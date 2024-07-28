import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Simulate fetching blog posts from a database
    const blogData = [
      { id: 1, title: 'The Importance of Reading', author: 'John Doe', date: 'July 23, 2024', content: 'Reading is essential for our personal growth and development...' },
      { id: 2, title: 'Top 10 Books of 2024', author: 'Jane Smith', date: 'July 20, 2024', content: 'Discover the top 10 must-read books of this year...' },
      { id: 3, title: 'How to Develop a Reading Habit', author: 'Emily Johnson', date: 'July 18, 2024', content: 'Developing a reading habit can be challenging but rewarding...' },
      // Add more blog posts as needed
    ];
    setPosts(blogData);
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-10 min-h-screen">
      {selectedPost ? (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{selectedPost.title}</h1>
          <p className="text-gray-700 mb-4">by {selectedPost.author} on {selectedPost.date}</p>
          <div className="text-gray-800 mb-4">{selectedPost.content}</div>
          <button className="text-blue-500 hover:underline" onClick={handleBackClick}>Back to Blog</button>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900">Our Blog</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => handlePostClick(post)}>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">by {post.author} on {post.date}</p>
                <p className="text-gray-800">{post.content.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;

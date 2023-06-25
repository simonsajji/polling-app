import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const PostsTable = () => {
  const [posts, setPosts] = useState([]);

  const fetchNewPosts = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${posts.length / 20}`
      );
      const newPosts = response.data.hits;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error('Error fetching new posts:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchNewPosts, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <table className="posts-table">
      <thead>
        <tr>
          <th>S No.</th>
          <th>Title</th>
          <th>URL</th>
          <th>Created At</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.objectID}>
            <td>{post.objectID}</td>
            <td>{post.title}</td>
            <td>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.url}
              </a>
            </td>
            <td>{post.created_at}</td>
            <td>{post.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;

import React, { useState } from 'react';
import { createPost } from '../services/api';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submittedPost, setSubmittedPost] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body, userId: 1 };
    try {
      const response = await createPost(newPost);
      setSubmittedPost(response);
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Create a New Post</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Post title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Post body"
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>

        {submittedPost && (
          <div className="alert alert-success mt-3">
            <h5>Post submitted successfully!</h5>
            <strong>Title:</strong> {submittedPost.title}
            <br />
            <strong>Body:</strong> {submittedPost.body}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostForm;

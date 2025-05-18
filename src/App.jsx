import React from 'react';
import PostForm from './componets/PostForm';
import PostList from './componets/PostList';

function App() {
  return (
    <div className="container">
      <h1>MentisPrep Post App</h1>
      <PostForm />
      <hr />
      <PostList />
    </div>
  );
}

export default App;

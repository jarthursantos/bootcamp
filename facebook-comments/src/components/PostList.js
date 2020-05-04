import React, { useState } from 'react';
import Post from './Post';
import api from '../api';

export default function PostList() {
  const [posts, setPosts] = useState(api.database);

  return (
    <div className='body'>
      <div className='post-list'>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}

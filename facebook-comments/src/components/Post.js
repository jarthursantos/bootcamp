import React from 'react';

import diego from '../assets/diego.jpeg';

export default function Post({ post }) {
  return (
    <div className='post'>
      <div className='content'>
        <div className='header'>
          <img src={post.author.avatar} alt='Profile Picture' />
          <div className='title'>
            <strong>{post.author.name}</strong>
            <span>{post.date}</span>
          </div>
        </div>
      
        <div className='message'>
          {post.content}
        </div>
      </div>
      {(post.comments && post.comments.lenght !== 0) && (
        <div className='comments'>
          <ul>
            {post.comments.map(comment => (
              <li key={comment.id}>
                <img src={comment.author.avatar} alt='Profile Picture' />
                <div className='comment'>
                  <strong>
                    {comment.author.name}
                    <span>
                      &nbsp;{comment.content}
                    </span>
                  </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

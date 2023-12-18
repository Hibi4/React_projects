// Comment.js
import React from 'react';
import Reply from './Reply';

const Comment = ({ comment }) => {
  const { content, createdAt, user, replies } = comment;

  return (
    <div>
        <p>
            <img src={user.image.png} alt={`${user.username}`} />
            {createdAt}
        </p>
      <p>{content}</p>
      
      
      {replies.length > 0 && (
        <div>
          <h3>Replies:</h3>
          {replies.map((reply) => (
            <Reply key={reply.id} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
// Reply.js
import React from 'react';

const Reply = ({ reply }) => {
  const { content, createdAt, user } = reply;

  return (
    <div>
      <img src={user.image.png} alt={`${user.username}'s avatar`} />
      <p>{content}</p>
      <p>{createdAt}</p>
    </div>
  );
};

export default Reply;
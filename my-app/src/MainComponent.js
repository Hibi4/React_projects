import React from 'react';
import Comment from './Comment';

const MainComponent = ({ data }) => {
  const { currentUser, comments } = data;

  return (
    <div>
      <h2>{currentUser.username}'s Comments</h2>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default MainComponent;
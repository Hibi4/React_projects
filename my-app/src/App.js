import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import MainComponent from './MainComponent';
import data from './data.json';

const App = () => {
  return (
    <div className='main'>
      <MainComponent data={data} />
    </div>
  );
};

/* // Comment component
function Comment (props) {
  const { comment } = props; // get the comment object from props
  return (
    <div className="comment">
      <p className="username">{comment.user.username}</p> // display the username
      <p className="content">{comment.content}</p> // display the content
    </div>
  );
} */ 

/* 
function Comment (props) {
  const { comment } = props; // get the comment object from props
  return (
    <div className="comment">
      
      <p className="username"> {comment.user.username} - {comment.createdAt} </p>
      <p className="content">{comment.content}</p>
      <p className="likes">Likes: {comment.replies.id}</p>
    </div>
  );
}


function App() {

  const data = require('./data.json'); // import the JSON file
  // console.log(data); // access the data as a normal JS object
  
  return (
    <div className="main">
      <h1>Current user: {data.currentUser.username}</h1>
      <h2>Comments:</h2>
      <div className="comments">
        {data.comments.map((comment) => ( // map over the comments array
          <Comment comment={comment} key={comment.id} /> // use the Comment component for each comment
        ))}
      </div>
    </div>
  );

} */ 

// Main component
/* function Main (props) {
  const { data } = props; // get the data object from props
  return (
    <div className="main">
      <h1>Current user: {data.currentUser.username}</h1> // display the current user
      <h2>Comments:</h2>
      <div className="comments">
        {data.comments.map((comment) => ( // map over the comments array
          <Comment comment={comment} key={comment.id} /> // use the Comment component for each comment
        ))}
      </div>
    </div>
  );
}
 */ 


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */ 

export default App;

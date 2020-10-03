import React from 'react';
import './App.css';
import RandomGif from './components/RandomGif';
import TagGif from './components/TagGif';

function App() {
  return (
    <div className="App">
      <h1>Random Gif Application</h1>
      <div className="gif-section">
      <RandomGif />
      <TagGif />
      </div>
    </div>
  );
}

export default App;

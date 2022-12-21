import './App.css';
import React from 'react';
import Lottie from 'lottie-react';
import warning from './assets/warning.json';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='warning-container'>
          <Lottie animationData={warning} loop={true} className="warning"/>
        </div>
        <div className='header-container'>
          <h1>I'M ON BREAK!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

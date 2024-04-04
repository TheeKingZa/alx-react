// task_0/dashboard/src/App.js

import React from 'react';
import './App.css';
import holbertonLogo from './holberton_logo.jpg'; // Import the Holberton logo image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" /> {/* Display the Holberton logo */}
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;

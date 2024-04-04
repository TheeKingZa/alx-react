import React from 'react';
import './App.css';
import holbertonLogo from './holberton_logo.jpg'; // Import the Holberton logo image
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header content */}
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" /> {/* Display the Holberton logo */}
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        {/* Body content */}
        <p>Login to access the full dashboard</p>
        {/* Email input field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        {/* Password input field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        {/* Button */}
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;

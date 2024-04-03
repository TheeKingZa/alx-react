// File: App.js
// Purpose: Main component of the application

import React from 'react';
import './App.css';
import holberton_logo from './holberton_logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

export default function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="email" onClick={() => document.getElementById('email').focus()}>Email:</label>
      <label htmlFor="password" onClick={() => document.getElementById('password').focus()}>Password:</label>
      <button>OK</button>

      <footer className='App-footer'>
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

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

      <footer className='App-footer'>
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

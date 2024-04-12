import React from 'react';
import holbertonLogo from '../../src/assets/holberton_logo.jpg'; // Import the Holberton logo image
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header className="App-header">
      {/* Header content */}
      <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" /> {/* Display the Holberton logo */}
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;

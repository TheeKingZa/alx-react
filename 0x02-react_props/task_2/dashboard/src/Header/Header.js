// Header.js
import React from 'react';
import './Header.css'; // Import CSS styles for the Header component
import holbertonLogo from '../assets/holberton_logo.jpg'; // Import the Holberton logo image

function Header() {
  return (
    <header className="App-header" data-testid="header-component">
      {/* Display the Holberton logo */}
      <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
      <h1>School dashboard</h1> {/* Heading for the dashboard */}
    </header>
  );
}

export default Header; // Export the Header component for use in other files

import React from 'react';
import './Header.css'; // Import the Header CSS file

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

// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS styles for the Footer component
import { getFullYear, getFooterCopy } from '../utils/utils'; // Import utility functions to get the current year and footer text

function Footer() {
  return (
    <footer className="App-footer" data-testid="footer-component">
      <p>Copyright 2020 - Holberton School</p> {/* Display copyright information */}
      <p>{getFooterCopy(true)}</p> {/* Display dynamic footer text */}
      <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p> {/* Display dynamic footer text with the current year */}
    </footer>
  );
}

export default Footer; // Export the Footer component for use in other files

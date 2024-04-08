import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils'; // Import necessary utility functions
import './Footer.css'; // Import the Footer CSS file

function Footer() {
  return (
    <footer className="App-footer">
      <p>Copyright 2020 - Holberton School</p>
      <p>{getFooterCopy(true)}</p>
      <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
    </footer>
  );
}

export default Footer;

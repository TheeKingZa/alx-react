// Filename: App.js
// Purpose: Define the main App component for the School dashboard app and import its corresponding CSS file

import './App.css'; // Importing CSS file for styling
import holberton_logo from './holberton_logo.jpg'; // Importing Holberton logo image

// Define the main App component
export default function App() {
  return (
    <div className="App"> {/* Main container for the entire app */}
      {/* Header section */}
      <header className='App-header'>
        <img src={holberton_logo} alt="Holberton Logo" /> {/* Displaying Holberton logo */}
        <h1>School dashboard</h1> {/* Displaying header text */}
      </header>

      {/* Body section */}
      <div className='App-body'>
        <p>Login to access the full dashboard</p> {/* Displaying body text */}
      </div>

      {/* Footer section */}
      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p> {/* Displaying footer text */}
      </footer>
    </div>
  );
}

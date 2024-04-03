// Filename: index.js
// Purpose: Entry point of the application, rendering the main App component into the DOM

import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library
import './index.css'; // Importing CSS file
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing reportWebVitals function

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root React DOM element
root.render( // Rendering the main App component into the root element
  <React.StrictMode> {/* Wrapping the App component with StrictMode for additional checks */}
    <App /> {/* Rendering the main App component */}
  </React.StrictMode>
);

reportWebVitals(); // Running reportWebVitals function to track web vitals

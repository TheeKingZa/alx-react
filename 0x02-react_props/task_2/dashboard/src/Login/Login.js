// Login.js
import React from 'react';
import './Login.css'; // Import CSS styles for the Login component

function Login() {
  return (
    <div className="login" data-testid="login-component"> {/* React Fragment to group multiple elements without adding extra nodes to the DOM */}
      <p>Login to access the full dashboard</p> {/* Instruction for the user */}
      <div>
        <label htmlFor="email">Email:</label> {/* Label for the email input field */}
        <input type="email" id="email" /> {/* Email input field */}
      </div>
      <div>
        <label htmlFor="password">Password:</label> {/* Label for the password input field */}
        <input type="password" id="password" /> {/* Password input field */}
      </div>
      <button>OK</button> {/* Button for submitting the login information */}
    </div>
  );
}

export default Login; // Export the Login component for use in other files

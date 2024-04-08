import React from 'react';
import './Login.css'; // Import the Login CSS file

function Login() {
  return (
    <div className="login-container">
      {/* Login content */}
      <p>Login to access the full dashboard</p>
      {/* Email input field */}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      {/* Password input field */}
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      {/* Button */}
      <button>OK</button>
    </div>
  );
}

export default Login;

import React from 'react';
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import Header from '../Header/Header'; // Import Header component
import Login from '../Login/Login'; // Import Login component
import Footer from '../Footer/Footer'; // Import Footer component
import './App.css'; // Import CSS file
import holbertonLogo from '../assets/holberton_logo.jpg'; // Import the Holberton logo image
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <Notifications /> {/* Add Notifications component */}
      <Header /> {/* Replace header code with Header component */}
      <div className="App-body">
        <Login /> {/* Replace login code with Login component */}
      </div>
      <Footer /> {/* Replace footer code with Footer component */}
    </div>
  );
}

export default App;

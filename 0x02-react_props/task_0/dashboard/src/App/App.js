import React from 'react';
import './App.css';
import holbertonLogo from '../assets/holberton_logo.jpg'; // Import the Holberton logo image
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications';
import Header from './Header/Header'; // Import Header component
import Login from './Login/Login'; // Import Login component
import Footer from './Footer/Footer'; // Import Footer component

function App() {
  return (
    <React.Fragment>
      <Notifications /> {/* Render Notifications component */}
    <div className="App">
      <Header /> {/* Render Header component */}
      <div className="App-body">
        <Login /> {/* Render Login component */}
      </div>
      <Footer /> {/* Render Footer component */}
    </div>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import holbertonLogo from '../assets/holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import NotificationItem from '../Notifications/NotificationItem'; // Import NotificationItem instead of Notifications
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <Login />
      </div>
      {/* Add the following components with data-testid attributes */}
      <div className="App">
        <NotificationItem data-testid="notifications-component" />
        <Header data-testid="header-component" />
        <Login data-testid="login-component" />
        <Footer data-testid="footer-component" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

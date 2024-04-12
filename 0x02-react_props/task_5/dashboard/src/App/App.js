// App.js
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  // Define the list of notifications
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available', html: { __html: 'HTML content' } },
    { id: 2, type: 'urgent', value: 'New resume available', html: { __html: 'HTML content' } },
    { id: 3, type: 'urgent', value: 'Urgent requirement - complete by EOD', html: { __html: 'HTML content' } },
  ];

  return (
    <div className="App">
      <Notifications listNotifications={listNotifications} displayDrawer /> {/* Pass listNotifications as prop */}
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;

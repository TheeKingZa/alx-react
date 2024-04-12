// Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationShape from './NotificationShape';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className="Notifications">
      <button
        style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        X
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.length === 0 ? (
          <li>No new notification for now</li>
        ) : (
          listNotifications.map(notification => (
            <NotificationItem key={notification.id} type={notification.type} value={notification.value} />
          ))
        )}
      </ul>
      {displayDrawer && (
        <div className="menuItem">
          Your notifications
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

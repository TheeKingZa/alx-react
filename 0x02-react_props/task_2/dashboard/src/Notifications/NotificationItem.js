import React from 'react';

function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} data-testid="notification-component">
      {/* Render notification content based on props */}
      {html ? (
        <div dangerouslySetInnerHTML={html} />
      ) : (
        <>{value}</>
      )}
    </li>
  );
}

export default NotificationItem;

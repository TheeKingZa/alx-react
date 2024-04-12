// NotificationItem.js

import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: value }} />
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;

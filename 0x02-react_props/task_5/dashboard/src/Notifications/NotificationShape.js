// NotificationShape.js
import PropTypes from 'prop-types';

const NotificationShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.objectOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
});

export default NotificationShape;

// File: notificationReducer.js

// Importing action types
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Define the initial state for the notification reducer
const initialState = {
  filter: 'DEFAULT',
  notifications: []
};

// Define the notification reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // When FETCH_NOTIFICATIONS_SUCCESS action is dispatched, update the state with notifications
      // Set isRead to false for each notification
      return {
        ...state,
        notifications: action.data.map(notification => ({ ...notification, isRead: false }))
      };
    case MARK_AS_READ:
      // When MARK_AS_READ action is dispatched, update the isRead property of the selected notification
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.index ? { ...notification, isRead: true } : notification
        )
      };
    case SET_TYPE_FILTER:
      // When SET_TYPE_FILTER action is dispatched, update the filter attribute with the selected filter type
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};

export default notificationReducer;

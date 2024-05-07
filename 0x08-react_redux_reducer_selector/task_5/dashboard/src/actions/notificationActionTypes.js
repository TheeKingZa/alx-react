// File: notificationActionTypes.js

// Define the action type for fetching notifications successfully
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

// Define the action types for marking notification as read and setting filter type
export const MARK_AS_READ = 'MARK_AS_READ';
export const SET_TYPE_FILTER = 'SET_TYPE_FILTER';

export const NotificationTypeFilters = {
  DEFAULT: "DEFAULT",
  URGENT: "URGENT",
};

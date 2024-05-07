// src/selectors/notificationSelector.js

// Selector to get the filter type selected
export const filterTypeSelected = (state) => state.notifications.filter;

// Selector to get all notifications
export const getNotifications = (state) => state.notifications.notifications;

// Selector to get unread notifications
export const getUnreadNotifications = (state) => {
  // Get all notifications from the state
  const notifications = state.notifications.notifications;
  // Filter out the unread notifications
  return notifications.filter((notification) => !notification.isRead);
};

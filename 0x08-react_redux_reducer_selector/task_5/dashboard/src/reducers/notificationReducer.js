// src/reducers/notificationReducer.js

// Import necessary modules
import { Map } from "immutable";

// Import action types
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

// Define initial notification state
export const initialNotificationState = {
  notifications: [],
  filter: "DEFAULT",
};

// Import notificationsNormalizer function from notifications schema
import notificationsNormalizer from "../schema/notifications";

// Define notification reducer function
const notificationReducer = (state = Map(initialNotificationState), action) => {
  switch (action.type) {
    // Case for fetching notifications successfully
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize data and merge with the state
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.merge(normalizedData);

    // Case for marking a notification as read
    case MARK_AS_READ:
      // Update the value of the item in the state
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );

    // Case for setting the type filter
    case SET_TYPE_FILTER:
      // Update the value of the state
      return state.set("filter", action.filter);

    // Default case
    default:
      break;
  }
  return state;
};

// Export the notification reducer function
export default notificationReducer;

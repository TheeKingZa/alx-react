// src/reducers/uiReducer.js 

// Import the Map function from the immutable module
import { Map } from "immutable";

// Import action types
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

// Define the initial state
export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// Define the uiReducer function to handle UI-related actions
const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      // Set the visibility of the notification drawer to true
      return state.set("isNotificationDrawerVisible", true);

    case HIDE_NOTIFICATION_DRAWER:
      // Set the visibility of the notification drawer to false
      return state.set("isNotificationDrawerVisible", false);

    case LOGIN_SUCCESS:
      // Set the user login status to true
      return state.set("isUserLoggedIn", true);

    case LOGIN_FAILURE:
      // Set the user login status to false
      return state.set("isUserLoggedIn", false);

    case LOGOUT:
      // Set the user login status to false when logging out
      return state.set("isUserLoggedIn", false);

    default:
      break;
  }
  // Return the current state if no action type matches
  return state;
};

// Export the uiReducer function as default
export default uiReducer;

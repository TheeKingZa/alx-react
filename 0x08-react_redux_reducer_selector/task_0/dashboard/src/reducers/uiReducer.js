// Importing action types from the UI action types file
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from '../actions/uiActionTypes';
  
  // Initial state for the UI reducer
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  
  // Reducer function for UI actions
  const uiReducer = (state = initialState, action) => {
    // Switch statement to handle different action types
    switch (action.type) {
      // Case for displaying notification drawer
      case DISPLAY_NOTIFICATION_DRAWER:
        // Returning new state with notification drawer set to visible
        return {
          ...state,
          isNotificationDrawerVisible: true,
        };
      // Case for hiding notification drawer
      case HIDE_NOTIFICATION_DRAWER:
        // Returning new state with notification drawer set to hidden
        return {
          ...state,
          isNotificationDrawerVisible: false,
        };
      // Case for successful login
      case LOGIN_SUCCESS:
        // Returning new state with user logged in
        return {
          ...state,
          isUserLoggedIn: true,
        };
      // Cases for login failure and logout
      case LOGIN_FAILURE:
      case LOGOUT:
        // Returning new state with user logged out
        return {
          ...state,
          isUserLoggedIn: false,
        };
      // Default case to return current state if action type doesn't match
      default:
        return state;
    }
  };
  
  // Exporting the UI reducer function
  export default uiReducer;
  
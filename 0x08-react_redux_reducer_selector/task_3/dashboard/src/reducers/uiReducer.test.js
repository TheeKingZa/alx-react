// Importing Map from Immutable.js
import { Map } from 'immutable';
// Importing the UI reducer function to be tested
import uiReducer from './uiReducer';
// Importing action types from the UI action types file
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Describe block for the UI reducer tests
describe('uiReducer', () => {
  // Test to verify the initial state is returned when no action is passed
  it('should return the initial state', () => {
    // Expect the UI reducer to return the initial state when no action is passed
    expect(uiReducer(undefined, {})).toEqual(
      // Ensure that the initial state matches the expected structure using Immutable Map
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map({}), // Nested Map to represent the user object
      })
    );
  });

  // Test to verify the state when DISPLAY_NOTIFICATION_DRAWER action is passed
  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    // Define the action object with type DISPLAY_NOTIFICATION_DRAWER
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    // Define the previous state with notification drawer hidden
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Define the expected state with notification drawer visible
    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Expect the UI reducer to return the expected state when the action is passed
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when HIDE_NOTIFICATION_DRAWER action is passed
  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    // Define the action object with type HIDE_NOTIFICATION_DRAWER
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    // Define the previous state with notification drawer visible
    const prevState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Define the expected state with notification drawer hidden
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Expect the UI reducer to return the expected state when the action is passed
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when LOGIN_SUCCESS action is passed
  it('should handle LOGIN_SUCCESS', () => {
    // Define the action object with type LOGIN_SUCCESS
    const action = { type: LOGIN_SUCCESS };
    // Define the previous state with user not logged in
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Define the expected state with user logged in
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({}),
    });
    // Expect the UI reducer to return the expected state when the action is passed
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when LOGIN_FAILURE action is passed
  it('should handle LOGIN_FAILURE', () => {
    // Define the action object with type LOGIN_FAILURE
    const action = { type: LOGIN_FAILURE };
    // Define the previous state with user logged in
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({}),
    });
    // Define the expected state with user not logged in
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Expect the UI reducer to return the expected state when the action is passed
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when LOGOUT action is passed
  it('should handle LOGOUT', () => {
    // Define the action object with type LOGOUT
    const action = { type: LOGOUT };
    // Define the previous state with user logged in
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({}),
    });
    // Define the expected state with user not logged in
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    // Expect the UI reducer to return the expected state when the action is passed
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });
});

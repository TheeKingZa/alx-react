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
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test to verify the state when DISPLAY_NOTIFICATION_DRAWER action is passed
  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when HIDE_NOTIFICATION_DRAWER action is passed
  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const prevState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when LOGIN_SUCCESS action is passed
  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when LOGIN_FAILURE action is passed
  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  // Test to verify the state when LOGOUT action is passed
  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });
});

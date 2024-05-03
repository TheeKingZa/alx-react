import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes"; // Import action types
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators"; // Import action creators

// Describe block for tests related to UI notification action creators
describe("tests for UI notification action creators", () => {
  
  // Test case to ensure login action creator creates the correct action object
  it("should create proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";
    
    // Assert that login action creator creates the expected action object with user credentials
    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  // Test case to ensure logout action creator creates the correct action object
  it("should create proper action for logout", () => {
    // Assert that logout action creator creates the expected action object
    expect(logout()).toEqual({ type: LOGOUT });
  });

  // Test case to ensure displayNotificationDrawer action creator creates the correct action object
  it("should create proper action for displaying notification drawer", () => {
    // Assert that displayNotificationDrawer action creator creates the expected action object
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  // Test case to ensure hideNotificationDrawer action creator creates the correct action object
  it("should create proper action for hiding notification drawer", () => {
    // Assert that hideNotificationDrawer action creator creates the expected action object
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});

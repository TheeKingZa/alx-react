// src/reducers/uiReducer.test.js

// Import the uiReducer function and the initial state from the uiReducer file
import uiReducer, { initialState } from "./uiReducer";

// Import the action type DISPLAY_NOTIFICATION_DRAWER
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

// Describe block for the uiReducer tests
describe("uiReducer tests", function () {
  // Test to verify that the default state is returned when no action is passed
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", function () {
    // Call the uiReducer function with undefined state and an empty object as action
    const state = uiReducer(undefined, {});

    // Expect the state to equal the initial state
    expect(state.toJS()).toEqual(initialState);
  });

  // Test to verify that the default state is returned when the action SELECT_COURSE is passed
  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", function () {
    // Call the uiReducer function with undefined state and an action of type SELECT_COURSE
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });

    // Expect the state to equal the initial state
    expect(state.toJS()).toEqual(initialState);
  });

  // Test to verify that the isNotificationDrawerVisible property changes correctly when the action DISPLAY_NOTIFICATION_DRAWER is passed
  it("verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", function () {
    // Call the uiReducer function with undefined state and an action of type DISPLAY_NOTIFICATION_DRAWER
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    // Expect the state to have the isNotificationDrawerVisible property set to true
    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});

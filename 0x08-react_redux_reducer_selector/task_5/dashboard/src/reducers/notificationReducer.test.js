// src/reducers/notificationReducer.test.js

// Import necessary modules
import { Map, fromJS } from "immutable";

// Import the notification reducer function and initial state
import notificationReducer, { initialNotificationState } from "./notificationReducer";

// Import action types
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

// Import notificationsNormalizer function from notifications schema
import notificationsNormalizer from "../schema/notifications";

// Describe block for the notification reducer tests
describe("notificationReducer tests", function () {
  // Test to verify the default state returns the initial state
  it("Tests that the default state returns an initial state", function () {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(Map(initialNotificationState));
  });

  // Test to verify FETCH_NOTIFICATIONS_SUCCESS returns the data passed
  it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", function () {
    // Define the action with sample data
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    // Normalize the data
    const normalizedData = notificationsNormalizer(action.data);

    // Define the expected data
    const expectedData = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = false;
    expectedData.notifications[3].isRead = false;

    // Apply the action to the reducer
    const state = notificationReducer(undefined, action);

    expect(state.toJS()).toEqual(expectedData);
  });

  // Test to verify MARK_AS_READ returns the data with the right item updated
  it("Tests that MARK_AS_READ returns the data with the right item updated", function () {
    // Define the initial state with sample data
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    // Normalize the initial state data
    initialState.notifications = notificationsNormalizer(initialState.notifications).notifications;

    // Define the MARK_AS_READ action with the index of the item to be marked as read
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    // Define the expected data after applying the action
    const expectedData = {
      filter: "DEFAULT",
      ...notificationsNormalizer(initialState.notifications),
    };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = true;
    expectedData.notifications[3].isRead = false;

    // Apply the action to the reducer
    const state = notificationReducer(fromJS(initialState), action);

    expect(state.toJS()).toEqual(expectedData);
  });

  // Test to verify SET_TYPE_FILTER returns the data with the right item updated
  it("Tests that SET_TYPE_FILTER returns the data with the right item updated", function () {
    // Define the initial state with sample data
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    // Normalize the initial state data
    initialState.notifications = notificationsNormalizer(initialState.notifications).notifications;

    // Define the SET_TYPE_FILTER action with the filter value
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };

    // Define the expected data after applying the action
    const expectedData = {
      filter: "URGENT",
      ...notificationsNormalizer(initialState.notifications),
    };

    // Apply the action to the reducer
    const state = notificationReducer(fromJS(initialState), action);

    expect(state.toJS()).toEqual(expectedData);
  });
});

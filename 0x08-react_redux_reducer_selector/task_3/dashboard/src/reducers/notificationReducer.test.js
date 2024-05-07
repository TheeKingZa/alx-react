// File: notificationReducer.test.js

// Import the notification reducer function
import notificationReducer from './notificationReducer';
// Import action types
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Describe block for the notification reducer tests
describe('notificationReducer', () => {
  // Test to verify the default state
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      filter: 'DEFAULT',
      notifications: []
    });
  });

// Test to verify FETCH_NOTIFICATIONS_SUCCESS action
it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ];
    const prevState = {
      filter: 'DEFAULT',
      notifications: [] // Empty array as initial notifications
    };
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    expect(notificationReducer(prevState, action)).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    });
  });
  

  // Test to verify MARK_AS_READ action
  it('should handle MARK_AS_READ', () => {
    const prevState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    };
    const action = { type: MARK_AS_READ, index: 2 };
    expect(notificationReducer(prevState, action)).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    });
  });

  // Test to verify SET_TYPE_FILTER action
  it('should handle SET_TYPE_FILTER', () => {
    const prevState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    expect(notificationReducer(prevState, action)).toEqual({
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    });
  });
});

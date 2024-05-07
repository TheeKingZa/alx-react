// src/selectors/notificationSelector.test.js

import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
  } from "./notificationSelector";
  
  describe("notification selectors tests", () => {
    // Define a mock state with sample data
    const state = {
      notifications: {
        filter: "DEFAULT",
        notifications: [
          { id: 1, isRead: true, message: "Notification 1" },
          { id: 2, isRead: false, message: "Notification 2" },
          { id: 3, isRead: false, message: "Notification 3" },
        ],
      },
    };
  
    it("filterTypeSelected should return the correct filter type", () => {
      // Call the filterTypeSelected selector with the mock state
      const result = filterTypeSelected(state);
      // Assert that the result matches the expected filter type
      expect(result).toEqual("DEFAULT");
    });
  
    it("getNotifications should return a list of all notifications", () => {
      // Call the getNotifications selector with the mock state
      const result = getNotifications(state);
      // Assert that the result matches the notifications in the state
      expect(result).toEqual(state.notifications.notifications);
    });
  
    it("getUnreadNotifications should return a list of unread notifications", () => {
      // Call the getUnreadNotifications selector with the mock state
      const result = getUnreadNotifications(state);
      // Define the expected unread notifications based on the mock state
      const expected = state.notifications.notifications.filter(
        (notification) => !notification.isRead
      );
      // Assert that the result matches the expected unread notifications
      expect(result).toEqual(expected);
    });
  });
  
import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes"; // Import action types
import { markAsRead, setNotificationFilter } from "./notificationActionCreators"; // Import action creators

// Describe block for tests related to notification actions
describe("tests for notification actions", () => {
  
  // Test case to ensure markAsRead action creator creates the correct action
  it("should create right action for mark as read", () => {
    // Assert that markAsRead action creator returns the expected action object
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  // Test case to ensure setNotificationFilter action creator creates the correct action
  it("should create right action for notification filter", () => {
    // Assert that setNotificationFilter action creator returns the expected action object
    expect(setNotificationFilter(NotificationTypeFilters["DEFAULT"])).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});

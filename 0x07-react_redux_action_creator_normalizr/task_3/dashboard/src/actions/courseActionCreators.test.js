import { selectCourse, unSelectCourse } from "./courseActionCreators"; // Import action creators
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes"; // Import action types

// Describe block for tests related to action creators
describe("tests for action creators", () => {
  
  // Test case to ensure selectCourse action creator returns the correct action
  it("should return right action payload and type when selectCourse is called", () => {
    // Assert that selectCourse action creator returns the expected action object
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  
  // Test case to ensure unSelectCourse action creator returns the correct action
  it("should return right action payload and type when unSelectCourse is called", () => {
    // Assert that unSelectCourse action creator returns the expected action object
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});

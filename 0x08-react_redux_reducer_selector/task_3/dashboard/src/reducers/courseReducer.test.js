// File: courseReducer.test.js

// Import the course reducer function
import courseReducer from './courseReducer';
// Import action types
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Describe block for the course reducer tests
describe('courseReducer', () => {
  // Test to verify the default state returns an empty array
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  // Test to verify FETCH_COURSE_SUCCESS returns the data passed
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    expect(courseReducer([], action)).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ]);
  });

  // Test to verify SELECT_COURSE returns the data with the right item updated
  it('should handle SELECT_COURSE', () => {
    const prevState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    expect(courseReducer(prevState, action)).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ]);
  });

  // Test to verify UNSELECT_COURSE returns the data with the right item updated
  it('should handle UNSELECT_COURSE', () => {
    const prevState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    expect(courseReducer(prevState, action)).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ]);
  });
});

// File: courseReducer.js

// Importing Map from Immutable.js
import { Map } from 'immutable';
// Importing action types
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Define the initial state for the course reducer
const initialState = [];

// Define the course reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // When FETCH_COURSE_SUCCESS action is dispatched, update the state with courses
      // Set isSelected to false for each course
      return action.data.map(course => ({ ...course, isSelected: false }));
    case SELECT_COURSE:
      // When SELECT_COURSE action is dispatched, update the isSelected property of the selected course
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );
    case UNSELECT_COURSE:
      // When UNSELECT_COURSE action is dispatched, update the isSelected property of the selected course
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );
    default:
      return state;
  }
};

export default courseReducer;

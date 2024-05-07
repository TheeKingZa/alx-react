// src/reducers/courseReducer.js

// Import the Map class from the immutable library
import { Map } from "immutable";

// Import action types
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

// Import the coursesNormalizer function from the courses schema
import coursesNormalizer from "../schema/courses";

// Define the initial state for courses as an empty array
export const initialCourseState = [];

// Define the course reducer function
const courseReducer = (state = Map(initialCourseState), action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for when FETCH_COURSE_SUCCESS action is dispatched
    case FETCH_COURSE_SUCCESS:
      // Normalize the data using the coursesNormalizer function
      const normalizedData = coursesNormalizer(action.data);
      // Set the 'isSelected' property of each course object to false
      Object.keys(normalizedData).map((key) => {
        normalizedData[key].isSelected = false;
      });
      // Merge the normalized data with the current state and return the new state
      return state.merge(normalizedData);

    // Case for when SELECT_COURSE action is dispatched
    case SELECT_COURSE:
      // Update the 'isSelected' property of the selected course to true
      return state.setIn([String(action.index), "isSelected"], true);

    // Case for when UNSELECT_COURSE action is dispatched
    case UNSELECT_COURSE:
      // Update the 'isSelected' property of the unselected course to false
      return state.setIn([String(action.index), "isSelected"], false);

    // Default case, return the current state
    default:
      break;
  }
  // Return the current state
  return state;
};

// Export the course reducer function as default
export default courseReducer;

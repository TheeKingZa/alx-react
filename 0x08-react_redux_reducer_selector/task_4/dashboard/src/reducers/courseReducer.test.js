// src/reducers/courseReducer.test.js

// Import necessary modules
import { Map, fromJS } from "immutable";
import courseReducer, { initialCourseState } from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

// Import coursesNormalizer function from the courses schema
import coursesNormalizer from "../schema/courses";

// Describe block for the courseReducer tests
describe("courseReducer tests", function () {
  // Test to verify the default state returns an empty array
  it("Tests that the default state returns an empty array", function () {
    const state = courseReducer(undefined, {});

    // Assert that the state matches the initialCourseState
    expect(state).toEqual(Map(initialCourseState));
  });

  // Test to verify FETCH_COURSE_SUCCESS returns the data passed
  it("Tests that FETCH_COURSE_SUCCESS returns the data passed", function () {
    // Define the action with course data
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };

    // Define the expected data after normalization
    const expectedData = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];

    // Apply the action to the reducer
    const state = courseReducer(undefined, action);

    // Assert that the state matches the normalized expected data
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });

  // Test to verify SELECT_COURSE returns the data with the right item updated
  it("Tests that SELECT_COURSE returns the data with the right item updated", function () {
    // Define the initial state with a selected course
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];

    // Define the action to select a course
    const action = { type: SELECT_COURSE, index: 2 };

    // Define the expected data after selecting a course
    const expectedData = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];

    // Apply the action to the reducer
    const state = courseReducer(fromJS(coursesNormalizer(initialState)), action);

    // Assert that the state matches the normalized expected data
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });

  // Test to verify UNSELECT_COURSE returns the data with the right item updated
  it("Tests that UNSELECT_COURSE returns the data with the right item updated", function () {
    // Define the initial state with a selected course
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];

    // Define the action to unselect a course
    const action = { type: UNSELECT_COURSE, index: 2 };

    // Define the expected data after unselecting a course
    const expectedData = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];

    // Apply the action to the reducer
    const state = courseReducer(fromJS(coursesNormalizer(initialState)), action);

    // Assert that the state matches the normalized expected data
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });
});

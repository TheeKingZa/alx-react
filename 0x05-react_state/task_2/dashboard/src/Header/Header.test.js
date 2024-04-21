/**
 * Header.test.js
 * 
 * @jest-environment jsdom
 */
import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

beforeEach(() => {
  // Suppress Aphrodite style injection before each test
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  // Clear Aphrodite style buffer and resume style injection after each test
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("render without crashing", () => {
    // Test to ensure the Header component renders without crashing
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  
  it("should render a h1", () => {
    // Test to ensure the Header component renders a h1 element with the correct text
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true); // Check if an image exists
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true); // Check if h1 element with text "School dashboard" exists
  });

  it(`Tests that logoutSection is not rendered with default context values`, () => {
    // Test to verify that the logoutSection is not rendered when user is not logged in
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(), // Mocked logOut function
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0); // Verify that logoutSection does not exist
    expect(wrapper.find("#logoutSection").exists()).toBe(false); // Alternative way to verify logoutSection does not exist
    wrapper.unmount(); // Clean up
  });

  it(`Tests that logoutSection is rendered with context values`, () => {
    // Test to verify that the logoutSection is rendered when user is logged in
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(), // Mocked logOut function
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(1); // Verify that logoutSection exists
    expect(wrapper.find("#logoutSection").exists()).toBe(true); // Alternative way to verify logoutSection exists
    wrapper.unmount(); // Clean up
  });

  it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
    // Test to verify that the logOut function is called when clicking on the logOut link
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(), // Mocked logOut function
    };

    const spy = jest.spyOn(context, "logOut"); // Spy on the logOut function

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("a").simulate("click"); // Simulate a click on the logOut link

    expect(spy).toHaveBeenCalled(); // Verify that the logOut function has been called
    expect(spy).toHaveBeenCalledTimes(1); // Verify that the logOut function has been called only once
    wrapper.unmount(); // Clean up
  });
});

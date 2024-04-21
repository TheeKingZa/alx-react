/**
 * App.test.js
 * 
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";

beforeEach(() => {
  // Suppress Aphrodite style injection before each test
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  // Clear Aphrodite style buffer and resume style injection after each test
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  // Test to ensure the App component renders without crashing
  it("renders App component without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test to check if Notifications component is rendered
  it("contains Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  // Test to check if Header component is rendered
  it("contains Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  // Test to check if Login component is rendered
  it("contains Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  // Test to check if Footer component is rendered
  it("contains Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  // Test to check if CourseList component is not rendered
  it("checks CourseList is not rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("when isLoggedIn is true", () => {
  // Test to check if user state is set correctly
  it("checks user state is set correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().user).toEqual(user);
  });

  // Test to check if Login component is not rendered
  it("checks Login is not rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  // Test to check if CourseList component is rendered
  it("checks CourseList is rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  // Test to check if logIn function updates user's state correctly
  it(`Tests that the logIn function updates user's state correctly`, () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  // Test to check if logOut function updates user's state correctly
  it(`Tests that the logOut function updates user's state correctly`, () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});

describe("testing state of App.js", () => {
  // Test to check if displayDrawer initial value is set to false
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  // Test to check if handleDisplayDrawer sets displayDrawer to true
  it("should set displayDrawer to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  // Test to check if handleHideDrawer sets displayDrawer to false
  it("should set displayDrawer to false after calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});

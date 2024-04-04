// task_3/dashboard/src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  // Test that App renders without crashing
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // Verify that App renders a div with the class App-header
  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  // Verify that App renders a div with the class App-body
  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  // Verify that App renders a div with the class App-footer
  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});

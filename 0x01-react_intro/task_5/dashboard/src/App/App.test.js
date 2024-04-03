// File: App.test.js
// Purpose: Test suite for the App component
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  // Test that App renders without crashing
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // Test that App renders a div with class App-header
  it('renders a div with class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  // Test that App renders a div with class App-body
  it('renders a div with class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  // Test that App renders a div with class App-footer
  it('renders a div with class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});

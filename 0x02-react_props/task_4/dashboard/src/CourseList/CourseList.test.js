// CourseList.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('should render CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the 5 different rows correctly', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tr')).toHaveLength(5);
    // You can write more specific checks for each row content here
  });
});

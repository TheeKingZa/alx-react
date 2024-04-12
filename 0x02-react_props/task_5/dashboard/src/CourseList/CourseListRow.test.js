// CourseListRow.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('should render CourseListRow component without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render one cell with colspan=2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" isHeader />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('should render two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test1" textSecondCell="Test2" isHeader />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('should render correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test1" textSecondCell="Test2" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});

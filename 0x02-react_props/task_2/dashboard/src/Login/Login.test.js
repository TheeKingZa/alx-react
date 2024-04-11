import React from 'react';
import { shallow } from 'enzyme'; // Import shallow from enzyme for shallow rendering
import Login from './Login'; // Import the Login component

describe('Login component', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders 2 input tags and 2 label tags', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('input')).toHaveLength(2);
      expect(wrapper.find('label')).toHaveLength(2);
    });
  });
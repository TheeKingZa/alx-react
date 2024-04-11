import React from 'react';
import { shallow } from 'enzyme'; // Import shallow from enzyme for shallow rendering
import Footer from './Footer'; // Import the Footer component


describe('Footer component', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders the text "Copyright"', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.text()).toContain('Copyright');
    });
  });
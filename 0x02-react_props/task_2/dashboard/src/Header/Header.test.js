import React from 'react';
import { shallow } from 'enzyme'; // Import shallow from enzyme for shallow rendering
import Header from './Header'; // Import the Header component

describe('Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    // Use find() method to find img and h1 tags
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});

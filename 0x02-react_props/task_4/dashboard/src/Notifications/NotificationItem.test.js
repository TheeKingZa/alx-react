// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('should render without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('should render correct html with dummy type and value props', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" />
    );
    expect(wrapper.find('li').text()).toEqual('test');
  });

  it('should render correct html with dummy html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


test('renders the Notifications component without crashing', () => {
  render(<Notifications />);
});

describe('Notifications Component', () => {
  it('should render NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('should render the first NotificationItem with the right html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('type')).toEqual('default');
    expect(firstItem.prop('value')).toEqual('New course available');
  });

  it('should display menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem').exists()).toBeTruthy();
  });

  it('should not display menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').exists()).toBeFalsy();
  });

  it('should display notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.Notifications').exists()).toBeTruthy();
  });

  it('should not display notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').exists()).toBeFalsy();
  });
});

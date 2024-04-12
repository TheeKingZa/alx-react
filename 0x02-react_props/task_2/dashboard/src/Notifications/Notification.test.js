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
    expect(wrapper.find(NotificationItem)).toHaveLength(3); // Adjusted to expect three elements
  });

  it('should render the first NotificationItem with the right html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('type')).toEqual('default');
    expect(firstItem.prop('value')).toEqual('New course available'); // Adjusted to match the static content
  });
});
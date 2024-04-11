import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders NotificationItem component', () => {
  const { getByTestId } = render(<App />);
  const notificationItemComponent = getByTestId('notification-component');
  expect(notificationItemComponent).toBeTruthy();
});

test('renders Header component', () => {
  const { getAllByTestId } = render(<App />);
  const headerComponents = getAllByTestId('header-component');
  expect(headerComponents).toHaveLength(2);
});


test('renders Login component', () => {
  const { queryAllByTestId } = render(<App />);
  const loginComponents = queryAllByTestId('login-component');
  expect(loginComponents.length).toBe(2);
});

test('renders Footer component', () => {
  const { queryAllByTestId } = render(<App />);
  const footerComponents = queryAllByTestId('footer-component');
  expect(footerComponents.length).toBe(2);
});

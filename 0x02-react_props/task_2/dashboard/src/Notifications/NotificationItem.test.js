import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import extend-expect to add toBeInTheDocument
import NotificationItem from './NotificationItem';
import ErrorBoundary from '../ErrorBoundary'; // Import the ErrorBoundary component

test('renders NotificationItem component without crashing', () => {
  render(<NotificationItem />);
});

test('renders NotificationItem with type and value props correctly', () => {
  const { getByTestId } = render(
    <NotificationItem type="default" value="test" />
  );
  const notificationItem = getByTestId('notification-component');
  expect(notificationItem).toHaveAttribute('data-notification-type', 'default');
  expect(notificationItem.textContent).toBe('test');
});

test('renders NotificationItem with html prop correctly', () => {
  const html = { __html: '<u>test</u>' };
  const { getByText } = render(
    <NotificationItem html={html} />
  );
  const notificationItem = getByText('test');
  expect(notificationItem).toBeInTheDocument();
});


test('renders NotificationItem elements', () => {
  const { getAllByTestId } = render(<Notifications />);
  const notificationItems = getAllByTestId('notification-component');
  expect(notificationItems.length).toBe(2);
});

test('renders first NotificationItem with correct html', () => {
  const { getByText } = render(<Notifications />);
  const notificationItem = getByText('New course available');
  expect(notificationItem).toBeInTheDocument();
});
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app with header, login, and footer', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/School dashboard/i);
  const loginElement = getByText(/Login to access the full dashboard/i);
  const footerElement = getByText(/Copyright/i);

  expect(headerElement).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});

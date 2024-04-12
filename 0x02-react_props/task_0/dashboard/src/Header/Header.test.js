import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/School dashboard/i);
  expect(headerElement).toBeInTheDocument();
});

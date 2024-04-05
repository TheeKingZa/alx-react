import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders header text', () => {
    render(<App />);
    const headerElement = screen.getByText(/School dashboard/i);

    expect(headerElement).toBeInTheDocument();
  });
});

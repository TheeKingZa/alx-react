import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login'; // Import the Login component

test('renders the Login component without crashing', () => {
  render(<Login />);
});

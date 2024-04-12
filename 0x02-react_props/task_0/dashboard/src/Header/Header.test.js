import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header'; // Import the Header component

test('renders the Header component without crashing', () => {
  render(<Header />);
});

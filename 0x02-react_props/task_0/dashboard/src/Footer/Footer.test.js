import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer'; // Import the Footer component

test('renders the Footer component without crashing', () => {
  render(<Footer />);
});

import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications'; // Import the Notifications component

test('renders the Notifications component without crashing', () => {
  render(<Notifications />);
});

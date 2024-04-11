import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from './utils/utils';

jest.mock('./utils/utils', () => ({
  getLatestNotification: jest.fn(),
}));

describe('Notifications', () => {
  beforeEach(() => {
    getLatestNotification.mockReturnValue('<strong>Hello</strong>');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Notifications />);
    expect(getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(getByAltText('Close icon')).toBeInTheDocument();
    expect(getLatestNotification).toHaveBeenCalledTimes(1);
  });

  it('calls handleClick function when close button is clicked', () => {
    const { getByAltText } = render(<Notifications />);
    const closeButton = getByAltText('Close icon');
    fireEvent.click(closeButton);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });

  it('renders list items with correct data attributes and content', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('New course available')).toHaveAttribute('data-priority', 'default');
    expect(getByText('New resume available')).toHaveAttribute('data-priority', 'urgent');
    expect(getByText('Hello').innerHTML).toBe('<strong>Hello</strong>');
  });
});

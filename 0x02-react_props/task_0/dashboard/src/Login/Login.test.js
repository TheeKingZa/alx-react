import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  const { getByLabelText, getByText } = render(<Login />);
  const emailInput = getByLabelText('Email:');
  const passwordInput = getByLabelText('Password:');
  const okButton = getByText('OK');
  
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(okButton).toBeInTheDocument();
});

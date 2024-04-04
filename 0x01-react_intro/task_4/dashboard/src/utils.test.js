// task_3/dashboard/src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
describe('getFullYear function', () => {
  test('returns the correct year', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Call the getFullYear function
    const year = getFullYear();
    // Assert that the returned year matches the current year
    expect(year).toEqual(currentYear);
  });
});

// Test for getFooterCopy function
describe('getFooterCopy function', () => {
  test('returns "Holberton School" when the argument is true', () => {
    // Call the getFooterCopy function with true argument
    const footerText = getFooterCopy(true);
    // Assert that the returned text is "Holberton School"
    expect(footerText).toEqual('Holberton School');
  });

  test('returns "Holberton School main dashboard" when the argument is false', () => {
    // Call the getFooterCopy function with false argument
    const footerText = getFooterCopy(false);
    // Assert that the returned text is "Holberton School main dashboard"
    expect(footerText).toEqual('Holberton School main dashboard');
  });
});

// Test for getLatestNotification function
describe('getLatestNotification function', () => {
  test('returns the correct string', () => {
    // Call the getLatestNotification function
    const notification = getLatestNotification();
    // Assert that the returned string matches the expected string
    expect(notification).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

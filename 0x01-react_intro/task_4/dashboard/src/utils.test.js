import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy function
test('getFooterCopy returns the correct string when argument is true', () => {
  const expectedString = 'Holberton School';
  expect(getFooterCopy(true)).toBe(expectedString);
});

test('getFooterCopy returns the correct string when argument is false', () => {
  const expectedString = 'Holberton School main dashboard';
  expect(getFooterCopy(false)).toBe(expectedString);
});

// Test for getLatestNotification function
test('getLatestNotification returns the correct string', () => {
  const notification = 'New version of Chrome now available';
  expect(getLatestNotification()).toBe(notification);
});

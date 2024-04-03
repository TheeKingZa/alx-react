// File: utils.test.js
// Purpose: Test suite for the utility functions

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility Functions', () => {
  // Test getFullYear function
  describe('getFullYear', () => {
    it('returns the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toEqual(currentYear);
    });
  });

  // Test getFooterCopy function
  describe('getFooterCopy', () => {
    it('returns correct string when argument is true', () => {
      const copy = getFooterCopy(true);
      expect(copy).toEqual('Holberton School');
    });

    it('returns correct string when argument is false', () => {
      const copy = getFooterCopy(false);
      expect(copy).toEqual('Holberton School main dashboard');
    });
  });

  // Test getLatestNotification function
  describe('getLatestNotification', () => {
    it('returns a non-empty string', () => {
      const notification = getLatestNotification();
      expect(notification).toBeTruthy();
      expect(typeof notification).toBe('string');
    });
  });
});

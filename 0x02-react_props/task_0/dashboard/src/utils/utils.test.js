import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('should return "Holberton School" if isIndex is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" if isIndex is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('should return the latest notification string with HTML tags', () => {
    const latestNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(latestNotification);
  });
});

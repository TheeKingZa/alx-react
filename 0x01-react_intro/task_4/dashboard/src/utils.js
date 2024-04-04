// utils.js

export function getFullYear() {
    return new Date().getFullYear();
  }

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  
  // Function to get the latest notification
export function getLatestNotification() {
  // Returns a string with HTML tags representing the latest notification
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

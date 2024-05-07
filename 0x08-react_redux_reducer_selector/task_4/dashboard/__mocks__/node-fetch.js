// __mocks__/node-fetch.js

const fetchMock = require('fetch-mock').sandbox();

// Mocking the fetch function
fetchMock.mock('*', async (url, options) => {
  // Your mock implementation here
});

module.exports = fetchMock;

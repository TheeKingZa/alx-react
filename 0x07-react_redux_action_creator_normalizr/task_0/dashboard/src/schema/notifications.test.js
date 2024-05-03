// Import the function to be tested
import getAllNotificationsByUser from './notifications';

// Describe the test suite for Notifications.js
describe('Test for Notifications.js', () => {
  // Test case: Verify that the function returns the correct data
  it('verify that the function returns the correct data', () => {
    // Define the expected data that the function should return for the given userId
    const expectedData = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
      }
    ];

    // Define the userId for which we are testing
    const userId = "5debd764a7c57c7839d722e9";

    // Assert that the result of the function matches the expected data
    expect(getAllNotificationsByUser(userId)).toEqual(expectedData);
  });
});

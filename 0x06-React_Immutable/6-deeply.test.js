import { mergeDeeplyElements } from './6-deeply'; // Import the function to test
import { Map } from 'immutable'; // Import Map from Immutable.js

describe('mergeDeeplyElements', () => { // Describe block for mergeDeeplyElements function
  it('should merge two objects deeply', () => { // Test case: should merge two objects deeply
    // Define the input objects to merge
    const page1 = {
      'user-1': {
        id: 1,
        name: 'test',
        likes: {
          1: {
            uid: 1234,
          }
        }
      },
    };

    const page2 = {
      'user-1': {
        likes: {
          2: {
            uid: 134,
          }
        }
      },
    };

    // Define the expected result after merging
    const expectedResult = Map({
      'user-1': {
        id: 1,
        name: 'test',
        likes: {
          1: {
            uid: 1234,
          },
          2: {
            uid: 134,
          }
        }
      },
    }).toList();

    // Call the function to merge the input objects
    const result = mergeDeeplyElements(page1, page2);

    // Assert that the result matches the expected result
    expect(result).toEqual(expectedResult);
  });
});

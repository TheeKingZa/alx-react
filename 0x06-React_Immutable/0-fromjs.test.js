// Import the getImmutableObject function
import getImmutableObject from './0-fromjs';
import Immutable from 'immutable';

// Test cases
describe('getImmutableObject', () => {
  it('should convert a plain object to an Immutable Map', () => {
    const plainObject = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132
    };
    const immutableMap = getImmutableObject(plainObject);
    // Assert that the returned value is an Immutable Map
    expect(immutableMap).toBeInstanceOf(Immutable.Map);
    // You can also add more specific assertions if needed
  });
});

import getImmutableObject from './1-map';
import { Map } from 'immutable';

describe('getImmutableObject', () => {
  it('should convert a plain object to an Immutable Map using Immutable.js Map constructor', () => {
    const plainObject = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132
    };
    const immutableMap = getImmutableObject(plainObject);
    // Assert that the returned value is an Immutable Map
    expect(immutableMap).toBeInstanceOf(Map);
    // Assert that the size of the Immutable Map is correct
    expect(immutableMap.size).toBe(4);
    // You can add more specific assertions if needed
  });
});

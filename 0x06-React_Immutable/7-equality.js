import { is } from 'immutable';

// Function to check if two Immutable Maps are equal
export function areMapsEqual(map1, map2) {
  // Use the `is` method to compare the equality of the two maps
  return is(map1, map2);
}

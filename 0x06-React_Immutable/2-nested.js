import { getIn } from 'immutable';

/**
 * Recursively accesses nested elements in an immutable object based on the provided array of keys.
 * @param {Object} object - The immutable object to access.
 * @param {Array} array - An array containing a list of keys forming a path in the object.
 * @returns {undefined|string|Map} - The value of the object at the defined path, undefined if not found.
 */
export default function accessImmutableObject(object, array) {
  // Get the first key from the array
  const key = array.shift();
  
  // If the key is undefined, return the object
  if (key === undefined) {
    return object;
  }

  // If the object does not contain the key, return undefined
  if (!object.has(key)) {
    return undefined;
  }

  // Recursively call the function with the nested object and the remaining array of keys
  return accessImmutableObject(getIn(object, [key]), array);
}


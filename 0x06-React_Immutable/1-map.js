import { Map } from 'immutable';

/**
 * Converts a plain object into an Immutable Map.
 * @param {Object} object - The plain object to convert.
 * @returns {Map} - The Immutable Map.
 */
const getImmutableObject = (object) => {
  // Convert the input object into an Immutable Map
  const immutableMap = Map(object);
  return immutableMap;
};

export default getImmutableObject;

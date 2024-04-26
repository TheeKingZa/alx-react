/* 0-fromjs.js */
// Importing the `fromJS` function from the 'immutable' library.
// `fromJS` is used to convert a plain JavaScript object into an Immutable.js data structure.
import { fromJS } from 'immutable';

// Defining a function named `getImmutableObject` which takes an `object` parameter.
// This function is responsible for converting a plain JavaScript object into an Immutable.js Map.
export default function getImmutableObject(object) {
  // Calling the `fromJS` function with the `object` parameter.
  // This function converts the plain JavaScript object into an Immutable.js data structure.
  // It returns an Immutable.js Map representing the converted object.
  return fromJS(object);
}

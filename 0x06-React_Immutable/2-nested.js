Import { getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
    // Start with the original object
    let result = object;
  
    // Traverse the object using the keys in the array
    for (let key of array) {
      // If the current key exists in the object, update the result with the value
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // If any key is not found, return undefined
        return undefined;
      }
    }
  
    // Return the final result
    return result;
  }
  

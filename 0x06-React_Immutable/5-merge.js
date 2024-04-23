import { List, Map } from 'immutable';

// Function to concatenate two arrays into a List
export function concatElements(page1, page2) {
  // Concatenate the arrays and convert them into an Immutable List
  return List([...page1, ...page2]);
}

// Function to merge two objects into a List, with page2 values taking precedence
export function mergeElements(page1, page2) {
  // Merge the objects and convert them into an Immutable Map
  const mergedMap = Map({...page1, ...page2});
  // Extract the values from the Map and convert them into an Immutable List
  return List(mergedMap.values());
}

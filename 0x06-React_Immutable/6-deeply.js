import { Map } from 'immutable';

// Function to merge two objects deeply
export function mergeDeeplyElements(page1, page2) {
  // Convert the objects into Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);
  // Merge the maps deeply, combining the values if they are the same
  const mergedMap = map1.mergeDeep(map2);
  // Return the merged map
  return mergedMap.toList();
}

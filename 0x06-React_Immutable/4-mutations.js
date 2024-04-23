import { Map } from 'immutable';

// Create an Immutable Map with initial values
export const map = Map({
  '1': 'Liam',
  '2': 'Noah',
  '3': 'Elijah',
  '4': 'Oliver',
  '5': 'Jacob',
  '6': 'Lucas',
});

// Create a new Immutable Map by modifying values from the original map
export const map2 = Map({
  ...map.toObject(),
    '2': 'Benjamin', // Modify the value for index 2 to 'Benjamin'
  // value for index '4' to 'Oliver' (no change)
});

export default { map, map2 };

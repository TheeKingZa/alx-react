import { areMapsEqual } from './7-equality';
import { Map } from 'immutable';

describe('areMapsEqual', () => {
  it('should return true if the maps are equal', () => {
    // Define the two equal maps
    const map1 = Map({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });

    const map2 = Map({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });

    // Call the function and expect the result to be true
    expect(areMapsEqual(map1, map2)).toBe(true);
  });

  it('should return false if the maps are not equal', () => {
    // Define two different maps
    const map1 = Map({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });

    const map2 = Map({
      firstName: 'John',
      lastName: 'Doe',
    });

    // Call the function and expect the result to be false
    expect(areMapsEqual(map1, map2)).toBe(false);
  });
});

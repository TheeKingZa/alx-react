import { map, map2 } from './4-mutations';

describe('map', () => {
  it('should create an Immutable Map with initial values', () => {
    // Verify each value in the map
    expect(map.get('1')).toBe('Liam');
    expect(map.get('2')).toBe('Noah');
    expect(map.get('3')).toBe('Elijah');
    expect(map.get('4')).toBe('Oliver');
    expect(map.get('5')).toBe('Jacob');
    expect(map.get('6')).toBe('Lucas');
  });
});

describe('map2', () => {
  it('should modify values for index 2 and 4', () => {
    // Verify that values for indices other than 2 and 4 remain unchanged
    expect(map2.get('1')).toBe('Liam');
    expect(map2.get('3')).toBe('Elijah');
    expect(map2.get('5')).toBe('Jacob');
    expect(map2.get('6')).toBe('Lucas');

    // Verify the modified values
    expect(map2.get('2')).toBe('Benjamin'); // Check the value for key '2'
    expect(map2.get('4')).toBe('Oliver');   // Check the value for key '4'
  });
});

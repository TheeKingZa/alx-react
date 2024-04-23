import accessImmutableObject from './2-nested';

describe('accessImmutableObject', () => {
  it('should return the value of the object at the defined path', () => {
    const object = {
      name: {
        first: "Guillaume",
        last: "Salva"
      }
    };
    // Test case 1: Accessing nested elements
    expect(accessImmutableObject(object, ['name', 'first'])).toBe('Guillaume');
    
    // Add more test cases as needed
  });

  it('should return undefined if the path is not found', () => {
    const object = {
      name: {
        first: "Guillaume",
        last: "Salva"
      }
    };
    // Test case 2: Path not found
    expect(accessImmutableObject(object, ['name', 'middle'])).toBe(undefined);
    
    // Add more test cases as needed
  });

  // Add more test cases as needed
});

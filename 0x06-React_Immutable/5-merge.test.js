import { concatElements, mergeElements } from './5-merge';
import { List } from 'immutable';

describe('concatElements', () => {
  it('should concatenate two arrays into a List', () => {
    const page1 = [1, 2, 3];
    const page2 = [4, 5, 6];
    const result = concatElements(page1, page2);
    expect(result).toEqual(List([1, 2, 3, 4, 5, 6]));
  });
});

describe('mergeElements', () => {
  it('should merge two objects into a List with page2 values taking precedence', () => {
    const page1 = { a: 1, b: 2, c: 3 };
    const page2 = { b: 5, d: 6 };
    const result = mergeElements(page1, page2);
    expect(result).toEqual(List([1, 5, 3, 6]));
  });
});

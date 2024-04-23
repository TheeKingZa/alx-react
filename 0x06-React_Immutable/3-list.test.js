import { List } from 'immutable'; // Importing List from Immutable.js
import { getListObject, addElementToList } from './3-list'; // Importing the functions to be tested

// Test suite for the getListObject function
describe('getListObject', () => {
  // Test case to ensure that getListObject correctly converts an array into an immutable List
  it('should convert an array into an immutable List', () => {
    // Define an array
    const array = [1, 2, 3];
    // Call the getListObject function with the array
    const list = getListObject(array);
    // Verify that the returned value is an instance of List
    expect(list).toBeInstanceOf(List);
    // Verify that the size of the List is equal to the length of the array
    expect(list.size).toBe(array.length);
    // Verify that the elements in the List match the elements in the array
    expect(list.get(0)).toBe(array[0]);
  });
});

// Test suite for the addElementToList function
describe('addElementToList', () => {
  // Test case to ensure that addElementToList correctly adds an element to an immutable List
  it('should add an element to an immutable List', () => {
    // Create an initial List
    const list = List([1, 2, 3]);
    // Define an element to add
    const element = 4;
    // Call the addElementToList function with the initial List and element
    const updatedList = addElementToList(list, element);
    // Verify that the returned value is an instance of List
    expect(updatedList).toBeInstanceOf(List);
    // Verify that the size of the updated List is one greater than the initial List
    expect(updatedList.size).toBe(list.size + 1);
    // Verify that the last element in the updated List is equal to the added element
    expect(updatedList.last()).toBe(element);
  });
});

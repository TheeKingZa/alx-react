import { List } from 'immutable';

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to convert.
 * @returns {List} - The immutable List.
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Adds an element to an immutable List.
 * @param {List} list - The immutable List.
 * @param {any} element - The element to add.
 * @returns {List} - The updated immutable List.
 */
export function addElementToList(list, element) {
  return list.push(element);
}

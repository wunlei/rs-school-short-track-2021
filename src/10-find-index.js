/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let current = Math.floor((start + end) / 2);
  while (start <= end) {
    current = Math.floor((start + end) / 2);
    if (array[current] === value) {
      return current;
    } if (array[current] > value) {
      end = current - 1;
    } else {
      start = current + 1;
    }
  }
  return false;
}

module.exports = findIndex;

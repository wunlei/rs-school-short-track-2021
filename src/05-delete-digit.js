/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const sort = [];
  for (let i = 0; i < arr.length; i++) {
    const a = [...arr];
    a.splice(i, 1);
    sort.push(a.join(''));
  }
  sort.sort((a, b) => a - b);
  return parseInt(sort.pop(), 10);
}

module.exports = deleteDigit;

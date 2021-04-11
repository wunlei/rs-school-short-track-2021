/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a1 = s1.split('');
  const a2 = s2.split('');
  let sum = 0;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j] === a1[i]) {
        sum += 1;
        a1[i] = 1;
        a2[j] = 0;
        break;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;

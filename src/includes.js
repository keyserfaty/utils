/**
 * Return true when an element is present on an array
 * @param arr
 * @param elem
 * @returns {boolean}
 */
function includes (arr, elem) {
  return arr.indexOf(elem) !== -1;
}

module.exports = includes;
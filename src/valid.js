var truthy = require('./truthy');
var empty = require('./empty');

/**
 * Return true when arg is not null, undefined, false or empty
 * @param arg
 * @returns {boolean}
 */
function valid (arg) {
  return truthy(arg) && !empty(arg);
}

module.exports = valid;
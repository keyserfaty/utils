var existy = require('./existy');

/**
 * Return false when arg is null, undefined or false
 * @param arg
 * @returns {boolean}
 */
function truthy (arg) {
  return arg !== false && existy(arg);
}

module.exports = truthy;
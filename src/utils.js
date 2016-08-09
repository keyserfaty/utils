(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.utils = factory();
  }
})(this, function() {
  'use strict';

  /**
   * Log an error
   * @param err
   */
  function fail (err) {
    return console.log(err);
  }

  /**
   * Return false when arg is null or undefined
   * @param arg
   * @returns {boolean}
   */
  function existy (arg) {
    return arg != null;
  }

  /**
   * Return false when arg is null, undefined or false
   * @param arg
   * @returns {boolean}
   */
  function truthy (arg) {
    return arg !== false && existy(arg);
  }

  /**
   * Return true when arg is of lenght 0
   * @param arg
   * @returns {boolean}
   */
  function empty (arg) {
    return arg.length === 0;
  }

  /**
   * Return true when arg is not null, undefined, false or empty
   * @param arg
   * @returns {boolean}
   */
  function valid (arg) {
    return utils.truthy(arg) && !empty(arg);
  }

  /**
   * Return true when an element is present on an array
   * @param arr
   * @param elem
   * @returns {boolean}
   */
  function includes (arr, elem) {
    return arr.indexOf(elem) !== -1;
  }
  
  var utils = {};
  utils.fail = fail;
  utils.existy = existy;
  utils.truthy = truthy;
  utils.empty = empty;
  utils.valid = valid;
  utils.includes = includes;

  return utils;
}());
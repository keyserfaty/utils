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

  var utils = {};
  utils.fail = function (err) {
    return console.log(err);
  };

  utils.existy = function (str) {
    return str != null;
  };

  utils.truthy = function (str) {
    return str !== false && utils.existy(str);
  };

  utils.empty = function (str) {
    return str.length === 0;
  };

  utils.valid = function (str) {
    return utils.truthy(str) && !utils.empty(str);
  };

  utils.includes = function (arr, elem) {
    return arr.indexOf(elem) !== -1;
  };

  return utils;
}());
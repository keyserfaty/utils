var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var util = require('../src/utils');

describe('util', function() {
  jsdom();

  describe('fail', function () {
    it('should be a function', function () {
      expect(util.fail).to.be.a('function');
    });
  });

  describe('existy', function () {
    it('should be false', function () {
      var _un = undefined;
      var _null = null;

      var _existy = function() {
        return util.existy(_un) && util.existy(_null);
      };

      expect(_existy()).to.eqls(false);
    });
  });

  describe('truthy', function () {
    it('should be false', function () {
      var _un = undefined;
      var _null = null;
      var _false = false;

      var _truthy = function() {
        return util.truthy(_un) && util.truthy(_null) && util.truthy(_false);
      };

      expect(_truthy()).to.eqls(false);
    });
  });

  describe('empty', function () {
    it('should be true', function () {
      var _arr = [];

      var _empty = function() {
        return util.empty(_arr);
      };

      expect(_empty()).to.eqls(true);
    });
  });

  describe('valid', function () {
    it('should be false', function () {
      var _un = undefined;
      var _null = null;
      var _false = false;
      var _arr = [];

      var _valid = function() {
        return util.valid(_un) && util.valid(_null) && util.valid(_false) && !util.valid(_arr);
      };

      expect(_valid()).to.eqls(false);
    });
  });

  describe('includes', function () {
    it('should be true', function () {
      var _arr = [1, 2, 3];

      var _includes = function() {
        return util.includes(_arr, 1);
      };

      expect(_includes()).to.eqls(true);
    });
  });

  describe('includes', function () {
    it('should be false', function () {
      var _arr = [1, 2, 3];

      var _includes = function() {
        return util.includes(_arr, 4);
      };

      expect(_includes()).to.eqls(false);
    });
  });
});
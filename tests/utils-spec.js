var expect = require('chai').expect;
var util = require('../src/utils');
var truthy = require('../src/truthy');
var existy = require('../src/existy');
var fail = require('../src/fail');
var includes = require('../src/includes');
var valid = require('../src/valid');
var empty = require('../src/empty');

describe('utils', function() {
  describe('fail', function () {
    it('should be a function', function () {
      expect(util.fail).to.be.a('function');
      expect(fail).to.be.a('function');
    });
  });

  describe('existy', function () {
    it('should be false', function () {
      var _un = undefined;
      var _null = null;

      var _existy = function() {
        return util.existy(_un) && util.existy(_null);
      };

      var _existy2 = function() {
        return existy(_un) && existy(_null);
      };

      expect(_existy()).to.eqls(false);
      expect(_existy2()).to.eqls(false);
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

      var _truthy2 = function() {
        return truthy(_un) && truthy(_null) && truthy(_false);
      };

      expect(_truthy()).to.eqls(false);
      expect(_truthy2()).to.eqls(false);
    });
  });

  describe('empty', function () {
    it('should be true', function () {
      var _arr = [];

      var _empty = function() {
        return util.empty(_arr);
      };

      var _empty2 = function() {
        return empty(_arr);
      };

      expect(_empty()).to.eqls(true);
      expect(_empty2()).to.eqls(true);
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

      var _valid2 = function() {
        return valid(_un) && valid(_null) && valid(_false) && !valid(_arr);
      };

      expect(_valid()).to.eqls(false);
      expect(_valid2()).to.eqls(false);
    });
  });

  describe('includes', function () {
    it('should be true', function () {
      var _arr = [1, 2, 3];

      var _includes = function() {
        return util.includes(_arr, 1);
      };

      var _includes2 = function() {
        return includes(_arr, 1);
      };

      expect(_includes()).to.eqls(true);
      expect(_includes2()).to.eqls(true);
    });
  });

  describe('includes', function () {
    it('should be false', function () {
      var _arr = [1, 2, 3];

      var _includes = function() {
        return util.includes(_arr, 4);
      };

      var _includes2 = function() {
        return includes(_arr, 4);
      };

      expect(_includes()).to.eqls(false);
      expect(_includes2()).to.eqls(false);
    });
  });
});
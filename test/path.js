"use strict";

var assert = require("assert");
var path = require("../src/path.js");

describe('path', function () {
  describe("path('dot.notation.path', obj)", function () {
    it('should return value located at the dot notation path', function () {
      var obj = { dot: { notation: { path: 42 } } };
      assert.equal(path('dot.notation.path', obj), 42);
    });
  });
  describe("path('path[N]', obj)", function () {
    it('should return value of the Nth index', function () {
      var obj = { path: [0,0,42] };
      assert.equal(path('path[2]', obj), 42);
    });
  });
  describe("path('path.nest[N]', obj)", function () {
    it('should return value of the Nth index, nested', function () {
      var obj = { path: { nest: [0,0,42] } };
      assert.equal(path('path.nest[2]', obj), 42);
    });
  });
  describe("path('path.nest[N].deeper', obj)", function () {
    it('should return value of the Nth index, nested', function () {
      var obj = { path: { nest: [0,0,{deeper:42}] } };
      assert.equal(path('path.nest[2].deeper', obj), 42);
    });
  });
  describe("path('path.nest[i].deeper', obj, 2)", function () {
    it('should return value of the Nth index, nested', function () {
      var obj = { path: { nest: [0,0,{deeper:42}] } };
      assert.equal(path('path.nest[i].deeper', obj, 2), 42);
    });
  });
});

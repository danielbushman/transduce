"use strict";

var assert = require("assert");
var path = require("../dist/path.js");
var fp = require('lodash/fp');

describe('path', function () {
  describe("reduce", ()=> {
    it('should work', ()=> {
      // var result = fp.reduce((o, k) => { return o + k }, 3, [3]);
      var result = fp.reduce((o, k)=> {return o[k]}, {dot:{notation:{path:42}}}, ['dot','notation','path']);
      assert.equal(result, 42);
    });
  });
  // describe("path('key', obj)", function () {
  //   it('should return value located at the dot notation path', function () {
  //     var obj = {key: 'value'};
  //     assert.equal(path('key', obj), 'value');
  //   });
  // });
  // describe("path('dot.notation.path', obj)", function () {
  //   it('should return value located at the dot notation path', function () {
  //     var obj = { dot: { notation: { path: 42 } } };
  //     assert.equal(path('dot.notation.path', obj), 42);
  //   });
  // });
  // describe("path('path[N]', obj)", function () {
  //   it('should return value of the Nth index', function () {
  //     var obj = { path: [0,0,42] };
  //     assert.equal(path('path[2]', obj), 42);
  //   });
  // });
  // describe("path('path.nest[N]', obj)", function () {
  //   it('should return value of the Nth index, nested', function () {
  //     var obj = { path: { nest: [0,0,42] } };
  //     assert.equal(path('path.nest[2]', obj), 42);
  //   });
  // });
  // describe("path('path.nest[N].deeper', obj)", function () {
  //   it('should return value of the Nth index, nested', function () {
  //     var obj = { path: { nest: [0,0,{deeper:42}] } };
  //     assert.equal(path('path.nest[2].deeper', obj), 42);
  //   });
  // });
  // describe("path('path.nest[i].deeper', obj, 2)", function () {
  //   it('should return value of the Nth index, nested', function () {
  //     var obj = { path: { nest: [0,0,{deeper:42}] } };
  //     assert.equal(path('path.nest[i].deeper', obj, 2), 42);
  //   });
  // });
});

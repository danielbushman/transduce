"use strict";

var assert = require("chai").assert;
var URI = require("../dist/URI.js");

describe('URI', function () {
  describe("Functions passed inappropriate types return undefined", function () {
    it('uri should be a string', function () {
      assert.isUndefined(URI(4));
    });
    it('obj should be an object', function () {
      assert.isUndefined(URI('name')(4));
    });
  });
  describe("URI('name') should return a function which will find a name", function () {
    it('should return value located at the dot notation URI', function () {
      const bob = {name: 'Bob'};
      const sue = {name: 'Sue'};
      const myNameIs = URI('name');
      assert.equal(myNameIs(bob), 'Bob');
      assert.equal(myNameIs(sue), 'Sue');
    });
  });
  describe("URI('key')('value')", function () {
    it('should return value located at the dot notation URI', function () {
      var obj = {key: 'value'};
      assert.equal(URI('key')(obj), 'value');
    });
  });
  describe("URI('dot.notation.URI')(obj)", function () {
    it('should return value located at the dot notation URI', function () {
      var obj = { dot: { notation: { URI: 42 } } };
      assert.equal(URI('dot.notation.URI')(obj), 42);
    });
  });
  describe("URI('URI[N]')(obj)", function () {
    it('should return value of the Nth index', function () {
      var obj = { URI: [0,0,42] };
      assert.equal(URI('URI[2]')(obj), 42);
    });
  });
  describe("URI('URI.nest[N]')(obj)", function () {
    it('should return value of the Nth index, nested', function () {
      var obj = { URI: { nest: [0,0,42] } };
      assert.equal(URI('URI.nest[2]')(obj), 42);
    });
  });
  describe("URI('URI.nest[N].deeper')(obj)", function () {
    it('should return value of the Nth index, nested', function () {
      var obj = { URI: { nest: [0,0,{deeper:42}] } };
      assert.equal(URI('URI.nest[2].deeper')(obj), 42);
    });
  });
  describe("URI('URI.nest[i].deeper')(obj)(2)", function () {
    it('should return value of the Nth index, nested', function () {
      var obj = { URI: { nest: [0,0,{deeper:42}] } };
      assert.equal(URI('URI.nest[i].deeper')(obj, 2), 42);
    });
  });
});

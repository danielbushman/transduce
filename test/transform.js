"use strict";

var assert = require("assert");
var expect = require('chai').expect;
var transform = require("../dist/transform.js");

var original = {
  'key_for_string_value': 'string value',
  'key_for_zero_value': 0,
  'key_for_single_digit_number': 2,
  'key_for_double_digit_number': 33,
  'key_for_negative_number': -1
}

var template = {
  'string_value': 'key_for_string_value',
  'zero_value': 'key_for_zero_value',
  'single_digit_number': 'key_for_single_digit_number',
  'double_digit_number': 'key_for_double_digit_number',
  'negative_number': 'key_for_negative_number'
}

var transformed = {
  'string_value': 'string value',
  'zero_value': 0,
  'single_digit_number': 2,
  'double_digit_number': 33,
  'negative_number': -1
}

describe("transform", function () {
  it('should transform the original into the transformed using the template', function () {
    expect(transform(original, template)).to.deep.equal(transformed);
  });
});

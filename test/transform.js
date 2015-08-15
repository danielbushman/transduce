"use strict";

var assert = require("assert");
var expect = require('chai').expect;
var transform = require("../dist/transform.js");

var original = {
  'key_for_string_value': 'string value',
  'key_for_zero_value': 0,
  'key_for_single_digit_number': 2,
  'key_for_double_digit_number': 33,
  'key_for_negative_number': -1,
  'key_for_simple_object': {'key': 'value'},
  'key_for_simple_list': [7,8,9],
  'key_for_list_iteration': [{'key': 77},{'key': 88},{'key': 99}]
}

var template = {
  'string_value': 'key_for_string_value',
  'zero_value': 'key_for_zero_value',
  'single_digit_number': 'key_for_single_digit_number',
  'double_digit_number': 'key_for_double_digit_number',
  'negative_number': 'key_for_negative_number',
  'simple_object_value': 'key_for_simple_object.key',
  'simple_list_value': 'key_for_simple_list[2]',
  'sub_list_value': 'key_for_list_iteration[2].key'
}

var transformed = {
  'string_value': 'string value',
  'zero_value': 0,
  'single_digit_number': 2,
  'double_digit_number': 33,
  'negative_number': -1,
  'simple_object_value': 'value',
  'simple_list_value': 9,
  'sub_list_value': 99
}

describe("transform", function () {
  it('should transform the original into the transformed using the template', function () {
    expect(transform(template, original)).to.deep.equal(transformed);
  });
});

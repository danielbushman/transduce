'use strict';

var R = require('ramda');
var Immutable = require('immutable');
var N = require('./N.js');

module.exports = function (path, obj, i) {
  if (R.type(obj) != 'Object' || R.type(path) != 'String') {
    return;
  }
  var val = Immutable.fromJS(obj);
  path.split('.').map(function (part) {
    var m = R.match(/(.+)\[(i|\d+)\]/, part);
    val = m[1] ? val.get(m[1]).get(m[2] == "i" ? i : m[2]) : val.get(part);
  });
  return val;
};
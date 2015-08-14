var R = require('ramda');
var UNDEFINED;

module.exports = function N(n, i) {
  var x = n == "i" ? i : n;
  return R.is(Number, x) ? x : UNDEFINED;
};

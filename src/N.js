var R = require('ramda');
var UNDEFINED;

// Not sure this is really helpful but at least has tests :)

module.exports = function N(n, i) {
  var x = n == "i" ? i : n;
  return R.is(Number, x) ? x : UNDEFINED;
};

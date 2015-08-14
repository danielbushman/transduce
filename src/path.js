var R = require('ramda');
var Immutable = require('immutable');
var N = require('./N.js');  

var REGEX = /(.+)\[(i|\d+)\]/;

var g = R.curry(function (im_, i, k) {
  var m = R.match(REGEX, k);
  return m[1] ? im_.get(m[1]).get(N(i, m[2])) : im_.get(k);
});

var REGEX_TO_RETURN_MATCH_AND_OFFER_KEY_IF_FOUND = /(.+)\[(i|\d+)\]/;
var maybe_key_ending_segment = function (path_segment) {
  var match = R.match(REGEX_TO_MATCH_AND_OFFER_KEY_IF_FOUND, path_segment);
  var possibly_the_key = match[1];
  if (possibly_the_key) {

  }
  var maybe_number = match[2];
}

var resolve_path_segment = function (path_segment) {
  var match = R.match(REGEX, path_segment);
  var key_ending_segment = match[1];
  var maybe_number = match[2];
}

var grab_from_immutable = function (immutable_to_grab_from, path_segment, maybe_index) {
  // match[1] will be the key at the end of the segment if there is one, otherwise undefined
  var match = R.match(REGEX, path_segment);
  var key_ending_segment = match[1];
  var maybe_number = match[2];

  var value;
  if (key_ending_segment) {
    var child_of_immutable = immutable_to_grab_from.get(key_ending_segment);
    var new_index = N(maybe_index, maybe_number);
    // new_index is for sure a number
    // how do we know if child_of_immutable was found?
    value = child_of_immutable.get(new_index);
  }
  else {
    value = immutable_to_grab_from.get(k);
  }
  return value;
});

var grab = R.curry(grab_from_immutable);


module.exports = function (path, obj, i) {
  if (R.type(obj) != 'Object' || R.type(path) != 'String') { return; }
  // var grab = R.curry(function (val, part) {
  //   var m = R.match(/(.+)\[(i|\d+)\]/, part);
  //   return m[1] ? val.get(m[1]).get(m[2] == "i" ? i : m[2]) : val.get(part);
  // });
  var im_ = Immutable.fromJS(obj);
  return path.split('.').map(grab(im_, i));
  // return val;
}


// function (k, im_, i) {
//   var m = R.match(/(.+)\[(i|\d+)\]/, k);
//   return m[1] ? im_.get(m[1]).get(m[2] == "i" ? i : m[2]) : im_.get(k);
// }



//// Impure
//
// module.exports = function (path, obj, i) {
//   if (R.type(obj) != 'Object' || R.type(path) != 'String') { return; }
//   var val = Immutable.fromJS(obj);
//   path.split('.').map(function (part) {
//     var m = R.match(/(.+)\[(i|\d+)\]/, part);
//     val = m[1] ? val.get(m[1]).get(m[2] == "i" ? i : m[2]) : val.get(part);
//   });
//   return val;
// }



//// Keeping this around until I jsperf it
//
// module.exports = function (path, obj, i) {
//   if (R.type(obj) !== 'Object' || R.type(path) !== 'String') { return; }
//   var val = R.clone(obj);
//   var regx = /(.+)\[(i|\d+)\]/
//   var pathParts = R.curry(function (p) { return p.split('.'); });
//   pathParts(path).map(function (part) {
//     if (!R.test(regx, part)) {
//       val = val[part];
//     } else {
//       var m = R.match(regx, part);
//       var index = m[2] === "i" ? i : m[2];
//       val = val[m[1]][index]
//     }
//   });
//   return val;
// }

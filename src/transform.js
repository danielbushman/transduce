var R = require('ramda');
var Immutable = require('immutable');
var URI = require('./URI.js');


module.exports = function transform (template, obj) {
  if (R.type(obj) != 'Object') { return; }

  if (R.type(template) == 'String') {
    return URI(template)(obj)(i);
  }

  return R.map(URI.mapValues, template);
};

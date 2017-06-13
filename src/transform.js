var R = require('ramda');
var Immutable = require('immutable');
var path = require('./path.js');

function transform (template, obj) {
  if (R.type(obj) != 'Object') { return; }

  if (R.type(template) == 'String') {
    return 'ever?'; //path(template, obj, i);
  }
  return R.mapObj((value) => {
    if (R.type(value) == 'String') {
      return path(value, obj);
    } else if (R.type(value) == 'Object') {
      return transform(value, obj)
    } else if (R.type(value) == 'Array') {
      return value.map((item) => {
        return transform(item, obj)
      });
    }
  }, template);
};

module.exports = transform;

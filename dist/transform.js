var R = require('ramda');
var Immutable = require('immutable');
var URI = require('./URI.js');

function mapValues(value) {
  switch (R.type(value)) {
    case 'String':
      return URI(value)(obj);
    case 'Object':
      return transform(value, obj);
    case 'Array':
      return value.map(item => {
        return transform(item, obj);
      });
  }
}

module.exports = function transform(template, obj) {
  if (R.type(obj) != 'Object') {
    return;
  }

  if (R.type(template) == 'String') {
    return URI(template)(obj)(i);
  }

  return R.map(mapValues, template);
};
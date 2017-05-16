const R = require('ramda');
const fp = require('lodash/fp')
const path = require('./path.js');

module.exports.transform (template, obj)=> {
  if (R.type(obj) !== 'Object') { return; }

  return fp.mapValues((value) => {
    if (R.type(value) === 'String') {
      return path(value, obj);
    } else if (R.type(value) === 'Object') {
      return transform(value, obj)
    } else if (R.type(value) === 'Array') {
      return value.map((item) => {
        return transform(item, obj)
      });
    }
  }, template);
};

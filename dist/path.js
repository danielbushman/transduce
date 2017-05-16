const R = require('ramda');
const fp = require('lodash/fp');

function path(path, obj, i) {
  if (typeof path !== 'string' || !obj || typeof obj !== 'object') {
    return;
  }
  return fp.reduce((obj, key) => {
    const m = key.match(/(.+)\[(i|\d+)\]/) || [];
    // const m = R.match(/(.+)\[(i|\d+)\]/, key);
    return m[1] ? obj[m[1]][m[2] === "i" ? i : m[2]] : obj[key];
  }, obj, path.split('.'));
}

module.exports = path;
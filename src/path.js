const fp = require('lodash/fp');

const re = /(.+)\[(i|\d+)\]/;

const reducer = (obj, key)=> {
  const m = key.match(re) || [];
  return m[1] ? obj[m[1]][m[2]] : obj[key];
}

// module.exports.URI (URI) {
//
// }
//
// module.exports.

module.exports.path (path, obj, i) => {
  if (typeof path !== 'string' || !obj || typeof obj !== 'object') { return; }
  return fp.reduce(reducer)(obj)(path.split('.')));
}

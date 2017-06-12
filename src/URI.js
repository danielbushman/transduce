var R = require('ramda');
var Immutable = require('immutable');
var N = require('./N.js');



module.exports = function URI(uri) {
  const uriType = R.type(uri);
  if (uriType != 'String') { return; }

  return (obj, i)=> {
    if (R.type(obj) != 'Object') { return; }

    var val = Immutable.fromJS(obj);
    uri.split('.').map((prop)=> {
      var m = R.match(/(.+)\[(i|\d+)\]/, prop);
      val = m[1] ? val.get(m[1]).get(m[2] == "i" ? i : m[2]) : val.get(prop);
    });
    return val;
  }
}

module.exports = function mapValues(value) {
  switch(R.type(value)) {
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

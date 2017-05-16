var UNDEFINED;

const assert = require('assert');
const N = require('../dist/N.js');

describe('N', function () {
  it("should return the provided number if it's alone", ()=> {
    assert.equal(N(3), 3);
  });
  it("should be undefined if 'i' is by itself", ()=> {
    assert.equal(N('i'), UNDEFINED);
  });
  it("should return number if 'i' is provided with any number", ()=> {
    assert.equal(N('i', 0), 0);
    assert.equal(N('i', 10), 10);
    assert.equal(N('i', 123), 123);
    assert.equal(N('i', -3), -3);
  });
  it("should return the provided number even if a second number is passed", ()=> {
    assert.equal(N(3, 4), 3);
  });
  it("should only allow 'i' as variable", ()=> {
    assert.equal(N('n', 0), UNDEFINED);
  })
});

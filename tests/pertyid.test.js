const { expect } = require('chai');

const pertyid = require('../index');

describe('pertyid', () => {
  it('should generate a pertyid', () => {
    expect(pertyid()).to.match(/[a-zA-Z0-9_-]{10}/g);
  });

  it('should generate a base64 string of a default length', () => {
    expect(pertyid().length).to.equal(10);
  });

  it('should generate a base64 string of a given length', () => {
    [15, 32, 6, 11, 87, 17, 1, 5, 3].forEach((len) => expect(pertyid(len).length).to.equal(len));
  });

  it('should not generate a base64 string with invalid length argument', () => {
    try {
      expect(pertyid('not a number'));
    } catch (err) {
      expect(err.name).to.equal('ERR_INVALID_ARGS');
      return true;
    }

    throw new Error('should not generate a base64 string with invalid length argument');
  });
});

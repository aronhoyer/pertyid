const { expect } = require('chai');

const b64id = require('../index');

describe('b64id', () => {
  it('should generate a base64 string', () => {
    const regex = new RegExp('[a-zA-Z0-9_-]', 'g');
    expect(regex.test(b64id())).to.equal(true);
  });

  it('should generate a base64 string of a default length', () => {
    expect(b64id().length).to.equal(10);
  });

  it('should generate a base64 string of a given length', () => {
    [15, 32, 6, 11, 87, 17, 1, 5, 3].forEach((len) => expect(b64id(len).length).to.equal(len));
  });

  it('should prepend the base64 string with a given string', () => {
    const pre = 'pre-';
    expect(b64id(10, pre)).to.contain(pre);
  });
});

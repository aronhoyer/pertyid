const { randomBytes } = require('crypto');

function generate(len) {
  return randomBytes((parseFloat(len) * 3) / 4).toString('base64');
}

function sanitizeForUri(id) {
  return id.replace(/\//g, '-').replace(/\+/g, '_').replace(/=/g, '');
}

const defaultLength = 10;

function pertyid(len) {
  if (len && typeof len !== 'number') {
    const err = new Error(`Invalid length. Expected number, but got ${typeof len}`);
    err.name = 'ERR_INVALID_ARGS';
    throw err;
  }

  let id = sanitizeForUri(generate(len || defaultLength));

  while (id.charAt(0) === '-' || id.charAt(0) === '_') {
    return pertyid(len);
  }

  if (len % 2 !== 0 && id.length < len) {
    id += sanitizeForUri(generate(2).charAt(0));
  }

  return id;
}

module.exports = pertyid;
module.exports.default = pertyid;

module.exports.defaultLength = defaultLength;

const { randomBytes } = require('crypto');

function generate(len) {
  return randomBytes((parseFloat(len) * 3) / 4).toString('base64');
}

function sanitizeForUri(id) {
  return id.replace(/\//g, '-').replace(/\+/g, '_').replace(/=/g, '');
}

const defaultLength = 10;

function pertyid(len, prefix) {
  if (len && typeof len !== 'number') {
    const err = new Error(`Invalid length argument. Expected number, but got ${typeof len}`);
    err.name = 'ERR_INVALID_ARGS';
    throw err;
  }

  if (prefix && typeof prefix !== 'string') {
    const err = new Error(`Invalid prefix argument. Expected string, but got ${typeof prefix}`);
    err.name = 'ERR_INVALID_ARGS';
    throw err;
  }

  let id = sanitizeForUri(generate(len || defaultLength));

  while (
    prefix
    && (prefix.charAt(prefix.length - 1) === '-' || prefix.charAt(prefix.length - 1) === '_')
    && (id.charAt(0) === '-' || id.charAt(0) === '_')
  ) {
    return pertyid(len, prefix);
  }

  if (parseFloat(len) % 2 !== 0 && id.length < len) {
    id += sanitizeForUri(generate(2).charAt(0));
  }

  return `${prefix || ''}${id}`;
}

module.exports = pertyid;
module.exports.default = pertyid;

module.exports.defaultLength = defaultLength;

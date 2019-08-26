const { randomBytes } = require('crypto');

function generate(len) {
  return randomBytes((parseFloat(len) * 3) / 4).toString('base64');
}

function sanitizeForUri(id) {
  return id.replace(/\//g, '-').replace(/\+/g, '_').replace(/=/g, '');
}

module.exports = function generateBase64ID(len, prepend) {
  if (len && typeof len !== 'number') {
    const err = new Error(`Invalid length argument. Expected number, but got ${typeof len}`);
    err.name = 'ERR_INVALID_ARGS';
    throw err;
  }

  if (prepend && typeof prepend !== 'string') {
    const err = new Error(`Invalid prepend argument. Expected number, but got ${typeof prepend}`);
    err.name = 'ERR_INVALID_ARGS';
    throw err;
  }

  let id = sanitizeForUri(generate(len || 10));

  if (parseFloat(len) % 2 !== 0 && id.length < len) {
    id += sanitizeForUri(generate(2).charAt(0));
  }

  return `${prepend || ''}${id}`;
};

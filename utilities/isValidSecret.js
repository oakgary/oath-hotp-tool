const base32 = require('hi-base32');

module.exports = (secret) => {
  try {
    base32.decode.asBytes(secret);
    return true;
  } catch (err) {
    return false;
  }
}

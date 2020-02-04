const crypto = require('crypto');

module.exports = (password) => {
  const salt = crypto.randomBytes(128).toString('base64');
  const iterations = 100000;
  const hash = crypto.pbkdf2Sync(password, salt, iterations, 512, 'sha512').toString('base64');

  return {
    salt,
    hash,
    iterations,
  };
};

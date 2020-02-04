const crypto = require('crypto');

const CIPHER_ALGORITHM = 'aes-256-ctr';

const encrypt = (key, plaintext) => {
  const sha256 = crypto.createHash('sha256');
  sha256.update(key);

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(CIPHER_ALGORITHM, sha256.digest(), iv);

  const ciphertext = cipher.update(Buffer.from(plaintext));
  const encrypted = Buffer.concat([iv, ciphertext, cipher.final()]).toString('base64');

  return encrypted;
};

const decrypt = (key, encrypted) => {
  const sha256 = crypto.createHash('sha256');
  sha256.update(key);

  const input = Buffer.from(encrypted, 'base64');

  const iv = input.slice(0, 16);
  const decipher = crypto.createDecipheriv(CIPHER_ALGORITHM, sha256.digest(), iv);

  const ciphertext = input.slice(16);
  const plaintext = decipher.update(ciphertext) + decipher.final();

  return plaintext;
};

module.exports = {
  encrypt,
  decrypt,
};

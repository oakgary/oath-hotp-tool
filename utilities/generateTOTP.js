const crypto = require('crypto');
const base32 = require('hi-base32');

function dynamicTruncationFn(hmacValue) {
  const offset = hmacValue[hmacValue.length - 1] & 0xf;
  return (
    ((hmacValue[offset] & 0x7f) << 24)
    | ((hmacValue[offset + 1] & 0xff) << 16)
    | ((hmacValue[offset + 2] & 0xff) << 8)
    | (hmacValue[offset + 3] & 0xff)
  );
}

function generateHOTP(secret, counter) {
  const decodedSecret = base32.decode.asBytes(secret);
  const buffer = Buffer.alloc(8);
  for (let i = 0; i < 8; i += 1) {
    buffer[7 - i] = counter & 0xff;
    counter >>= 8;
  }

  const hmac = crypto.createHmac('sha1', Buffer.from(decodedSecret));
  hmac.update(buffer);
  const hmacResult = hmac.digest();

  const code = dynamicTruncationFn(hmacResult);

  return code % 10 ** 6;
}

const generateTOTP = (secret) => generateHOTP(secret, Math.floor(Date.now() / 30000));

module.exports = generateTOTP


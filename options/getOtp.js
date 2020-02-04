const { prompt } = require('enquirer');
const clipboardy = require('clipboardy');
const prompts = require('./prompts');
const { generateTOTP, aes, readConfig } = require('../utilities')

module.exports = async (password) => {
  const config = readConfig();
  if (!config.otps || config.otps.length === 0) { console.log('No OTPs added!'); return; }
  const { provider } = await prompt({ ...prompts.getProvider, ...{ choices: config.otps.map((c) => c.name) } });
  const { secret } = config.otps.find((c) => c.name === provider);
  const otp = generateTOTP(aes.decrypt(password, secret));
  if (config.shouldCopyToClipboard) {
    clipboardy.writeSync(`${otp}`);
    console.log('OTP has been copied to your clipboard!');
  } else {
    console.log(otp);
  }
};

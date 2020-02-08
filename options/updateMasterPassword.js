const fs = require('fs');
const { prompt } = require('enquirer');
const prompts = require('./prompts');
const { generatePasswordObject, aes, readConfig } = require('../utilities')

module.exports = async (oldPassword) => {
  const config = readConfig();
  const { password: newPassword } = await prompt(prompts.updatePassword);
  const updatedConfig = {
    ...config,
    ...{
      password: generatePasswordObject(newPassword),
      otps: (config.otps || []).map((h) => ({
        ...h,
        ...{ secret: aes.encrypt(newPassword, aes.decrypt(oldPassword, h.secret)) },
      })),
    },
  };
  fs.writeFileSync('config.json', JSON.stringify(updatedConfig, null, 2), 'utf8');
  console.log('\x1b[32m', 'Your master password has been updated!');
  return newPassword;
};

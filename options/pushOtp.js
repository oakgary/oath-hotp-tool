const fs = require('fs');
const { prompt } = require('enquirer');
const prompts = require('./prompts');
const { isValidSecret, aes, readConfig } = require('../utilities')

module.exports = async (password) => {
  const config = readConfig();

  let name = null;
  do {
    name = (await prompt(prompts.putProvider)).provider
    if ((config.otps || []).map(h => h.name).includes(name)) {
      console.log(`OTP with name "${name}" already exists!`)
      name = null;
    }
  } while (!name)

  let secret = null;
  do {
    ({ secret } = await prompt(prompts.enterSecret));
    if (!isValidSecret(secret)) {
      console.log('Entered invalid secret!');
      secret = null;
    }
  } while (!secret)

  const updatedConfig = {
    ...config,
    ...{
      otps: [...config.otps || [], ...[{
        name,
        secret: aes.encrypt(password, secret),
      }]],
    },
  };
  fs.writeFileSync('config.json', JSON.stringify(updatedConfig, null, 2), 'utf8');
  console.log(`OTP for "${name}" has been added to your list!`)
};

const fs = require('fs');
const { prompt } = require('enquirer');
const prompts = require('./prompts');
const { aes, readConfig } = require('../utilities')

module.exports = async (password) => {
  const config = readConfig();

  const { confirm } = await prompt(prompts.confirmSecretExport);
  if (!confirm) return;

  const secrets = (config.otps || []).map((h) => `${h.name}: ${aes.decrypt(password, h.secret)}`).join('\n');

  fs.writeFileSync('secrets.txt', secrets, 'utf8');
  console.log('\x1b[32m', 'Exported secrets into secrets.txt');
};

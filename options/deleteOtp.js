const { prompt } = require('enquirer');
const fs = require('fs');
const prompts = require('./prompts');
const { readConfig } = require('../utilities')

module.exports = async () => {
  const config = readConfig();
  if (!config.otps || config.otps.length === 0) { console.log('No OTPs added!'); return; }
  const { provider } = await prompt({ ...prompts.getProvider, ...{ choices: config.otps.map((c) => c.name) } });
 
  const updatedConfig = {
    ...config,
    ...{
      otps: config.otps.filter(h => h.name !== provider)
    },
  };

  fs.writeFileSync('config.json', JSON.stringify(updatedConfig, null, 2), 'utf8');
  console.log(`"${provider}" has been deleted from your list!`)
}

const { prompt } = require('enquirer');
const config = require('./config.json');
const {isValidPassword } = require('./utilities')
const { updateMasterPassword, prompts } = require('./options');
const renderOptions = require('./renderOptions');

(async () => {
  let password = null;
  if (!config.password) password = await updateMasterPassword();
  if (!password) do ({ password } = await prompt(prompts.enterPassword)); while (!isValidPassword(password));
  for (; ;) await renderOptions(password);
})();

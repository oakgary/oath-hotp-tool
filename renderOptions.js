const { prompt } = require('enquirer');
const { pushOtp, deleteOtp, getOtp, updateMasterPassword, prompts } = require('./options');

const options = ['Get OTP', 'Enter new OTP', 'Delete OTP', 'Update master password', 'Exit'];

const renderOptions = async (password) => {
  console.log();
  switch ((await prompt({ ...prompts.options, ...{ choices: [...options] } })).option) {
    case options[0]: await getOtp(password); break;
    case options[1]: await pushOtp(password); break;
    case options[2]: await deleteOtp(); break;
    case options[3]: await updateMasterPassword(password); break;
    case options[4]: process.exit(); break;
    default: break;
  }
};

module.exports = renderOptions;

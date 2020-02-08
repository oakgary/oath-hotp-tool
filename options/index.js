const updateMasterPassword = require('./updateMasterPassword');
const getOtp = require('./getOtp');
const pushOtp = require('./pushOtp');
const deleteOtp = require('./deleteOtp');
const exportSecrets = require('./exportSecrets');
const prompts = require('./prompts')

module.exports = {
  updateMasterPassword,
  getOtp,
  pushOtp,
  deleteOtp,
  exportSecrets,
  prompts,
};

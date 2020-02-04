const { pbkdf2Sync } = require('crypto');
const config = require('../config.json');

module.exports = (password) => config.password.hash === pbkdf2Sync(password, config.password.salt, config.password.iterations, 512, 'sha512').toString('base64');

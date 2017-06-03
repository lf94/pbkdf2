var crypto = require('crypto')
/* istanbul ignore next */
if (!crypto.pbkdf2Sync) {
  var crypto = require('./browser');
}

exports.pbkdf2Sync = crypto.pbkdf2Sync
exports.pbkdf2 = crypto.pbkdf2

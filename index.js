
/* istanbul ignore next */

if (window) {
  var crypto = require('./browser');
} else {
  var crypto = require('crypto')
}

exports.pbkdf2Sync = crypto.pbkdf2Sync
exports.pbkdf2 = crypto.pbkdf2

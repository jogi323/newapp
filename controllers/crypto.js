const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'a password');
exports.encrypted = function(text){
  let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

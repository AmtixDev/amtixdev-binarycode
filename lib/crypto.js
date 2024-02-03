const crypto = require('crypto');

function encryptText(text, secretKey) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encryptedText = cipher.update(text, 'utf-8', 'hex');
  encryptedText += cipher.final('hex');
  return encryptedText;
}

function decryptText(encryptedText, secretKey) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decryptedText = decipher.update(encryptedText, 'hex', 'utf-8');
  decryptedText += decipher.final('utf-8');
  return decryptedText;
}

module.exports = { encryptText, decryptText };
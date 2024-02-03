const textToBinary = require('./lib/encoder');
const binaryToText = require('./lib/decoder');
const fetchBinaryData = require('./lib/network');
const { encryptText, decryptText } = require('./lib/crypto');

module.exports = {
  textToBinary,
  binaryToText,
  fetchBinaryData,
  encryptText,
  decryptText
};
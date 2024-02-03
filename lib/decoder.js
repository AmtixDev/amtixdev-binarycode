function binaryToText(binary) {
  return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

module.exports = binaryToText;
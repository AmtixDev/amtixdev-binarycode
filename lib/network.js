const axios = require('axios');

async function fetchBinaryData(url) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const binaryData = Buffer.from(response.data).toString('binary');
  return binaryData;
}

module.exports = fetchBinaryData;
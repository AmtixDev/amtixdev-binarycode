<div align="center">
    <br />
    <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1141443355532873879/1173692642551402608/mybanner-o-x_1.png?ex=6564e174&is=65526c74&hm=4939339c5671e01c6cdd068fb581b1fe88bd9b1c8fe56142caa4f51953cc7237&" width="546" alt="amtixdev-binarycode" /></a>
    </p>
    <p>
    <a href="https://discord.gg/Ym5V2DB6sk"><img src="https://img.shields.io/discord/1125840988007579732?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/amtixdev-binarycode"><img src="https://img.shields.io/npm/v/amtixdev-binarycode?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/amtixdev-binarycode"><img src="https://img.shields.io/npm/dt/amtixdev-binarycode?maxAge=3600" alt="NPM downloads" /></a>
    </p>
  <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1148318536062742648/1180978797193990275/Powered_By_AmtiXDev_With_Color.png?ex=657f6336&is=656cee36&hm=0828041d09f451ead489b244b10099ba1bd97fa6becffdca1d8e2315ccb2df35&" alt="AmtiXDev" /></a>
    </p>

</div>

# Amtixdev-Binarycode
'amtixdev-binarycode' is a versatile npm package that provides functionalities for encoding text to binary, decoding binary to text, fetching binary data from URLs, and basic text encryption/decryption.
## Installation
You can install the 'amtixdev-binarycode' package using npm:

```bash
npm install amtixdev-binarycode
```

# Usage
Text to Binary
Convert a string of text to binary representation:
```js
const binarycode = require('amtixdev-binarycode');

const text = 'The quick brown 🦊 jumps over 13 lazy 🐶.';
const binary = binarycode.textToBinary(text);

console.log(binary);
// Output: 01010100 01101000 01100101 00100000 01110001 01110101 01101001 01100011 01101011 00100000 01100010 01110010 01101111 01110111 01101110 00100000 11110000 10011111 10100110 10001010 00100000 01101010 01110101 01101101 01110000 01110011 00100000 01101111 01110110 01100101 01110...

const decodedText = binarycode.binaryToText(binary);
console.log(decodedText);
// Output: The quick brown 🦊 jumps over 13 lazy 🐶.
```

Fetch Binary Data from URL
Fetch binary data from a specified URL:
```js
const binarycode = require('amtixdev-binarycode');

const url = 'https://example.com/binary-data';
binarycode.fetchBinaryData(url).then(binaryData => {
  console.log(binaryData);
});
```

Text Encryption and Decryption
Encrypt and decrypt sensitive information using a secret key:
```js
const binarycode = require('amtixdev-binarycode');

const text = 'Sensitive information';
const secretKey = 'mySecretKey';

const encryptedText = binarycode.encryptText(text, secretKey);
console.log(encryptedText);

const decryptedText = binarycode.decryptText(encryptedText, secretKey);
console.log(decryptedText);
```
## Discord Bot Example
Integrating amtixdev-binarycode in a Discord bot:
```js
const Discord = require('discord.js');
const binarycode = require('amtixdev-binarycode');

const client = new Discord.Client();
const token = 'YOUR_DISCORD_BOT_TOKEN';

client.on('message', async message => {
  if (message.content.startsWith('!binary')) {
    const textToEncode = message.content.slice('!binary'.length).trim();
    
    // Convert text to binary
    const binaryRepresentation = binarycode.textToBinary(textToEncode);

    // Send the binary representation as a reply
    message.reply(`Binary representation: \`${binaryRepresentation}\``);
  }

  if (message.content.startsWith('!decode')) {
    const binaryToDecode = message.content.slice('!decode'.length).trim();

    // Convert binary to text
    const decodedText = binarycode.binaryToText(binaryToDecode);

    // Send the decoded text as a reply
    message.reply(`Decoded text: \`${decodedText}\``);
  }
});

client.login(token);
```
Make sure to replace 'YOUR_DISCORD_BOT_TOKEN' with your actual Discord bot token. This example listens for messages starting with !binary and !decode, encoding and decoding text accordingly and replying with the results.

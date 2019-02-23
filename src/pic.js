const clipboard = require('clipboardy');
const opn = require('opn');
const chalk = require('chalk');

async function run({ '--copy': shouldCopy }) {
  const url = 'https://d-k.im/pic';
  if (shouldCopy) {
    clipboard.writeSync(url);
    console.log(
      `=> ${chalk.blue.underline(url)} has been copied to your clipboard`
    );
  } else {
    console.log(`Opening ${chalk.blue.underline(url)} in your browser`);
    opn(url);
    process.exit(0);
  }
}

module.exports = { run };

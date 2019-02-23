const clipboard = require('clipboardy');
const { getData } = require('./helpers/data');
const { wrap } = require('./helpers/wrap-text');

async function run({ '--copy': shouldCopy }) {
  const data = await getData();
  const bio = data.biography._paragraphs[0];
  console.log(wrap('\n' + bio + '\n'));
  if (shouldCopy) {
    clipboard.writeSync(bio);
  }
}

module.exports = { run };

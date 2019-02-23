const terminalSize = require('term-size');
const wrapAnsi = require('wrap-ansi');

function wrap(text) {
  let wrapLength = terminalSize().columns - 5;
  if (wrapLength > 80) {
    wrapLength = 80;
  }
  return wrapAnsi(text, wrapLength);
}

module.exports = { wrap };

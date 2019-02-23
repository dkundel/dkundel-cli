const windowSize = require('window-size');
const wrapAnsi = require('wrap-ansi');

function wrap(text) {
  let wrapLength = windowSize.width - 5;
  if (wrapLength > 80) {
    wrapLength = 80;
  }
  return wrapAnsi(text, wrapLength);
}

module.exports = { wrap };

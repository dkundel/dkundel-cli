const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer(),
  breaks: true,
});

module.exports = { render: marked };

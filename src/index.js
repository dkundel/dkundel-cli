#!/usr/bin/env node
'use strict';
const arg = require('arg');

const args = arg({
  '--help': Boolean,
  '--copy': Boolean,
});

const cmd = args._[0] || 'default';
const options = { ...args, cmd };

require(`./${cmd}`).run(options);

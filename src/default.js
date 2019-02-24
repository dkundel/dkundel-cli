const chalk = require('chalk');
const stripIndent = require('common-tags/lib/stripIndent');
const boxen = require('boxen');

const b = chalk.bold;

function run(options) {
  const npx = chalk.redBright('npx');
  const output = stripIndent`
    PLACEHOLDER
              Dominik Kundel ${chalk.green('/')} dkundel
    JS loving Panda living in San Francisco, CA 
        
        ${b('Work')}: Developer Evangelist at Twilio
    
     ${b('Twitter')}: https://twitter.com/${chalk.cyan('dkundel')}
       ${b('Email')}: hi@dkundel.com
         ${b('npm')}: https://npm.im/${chalk.red('~dkundel')}
      ${b('GitHub')}: https://github.com/${chalk.underline('dkundel')}
    ${b('LinkedIn')}: https://linkedin.com/in/${chalk.cyan('dkundel')}
     ${b('Keybase')}: https://keybase.io/${chalk.green('dkundel')}
         ${b('Web')}: https://${chalk.magentaBright('dkundel.com')}
    
        ${b('Card')}: ${npx} dkundel
         ${b('Bio')}: ${npx} dkundel bio
       ${b('Talks')}: ${npx} dkundel talks
     ${b('Picture')}: ${npx} dkundel pic
    ${b('Projects')}: ${npx} dkundel projects
  `.replace('PLACEHOLDER', '');

  console.log(
    boxen(output, {
      padding: { top: 1, bottom: 1, left: 8, right: 8 },
      margin: 1,
      borderColor: 'green',
    }).replace('^', '🐼')
  );
}

module.exports = { run };

const { Select } = require('enquirer');
const chalk = require('chalk');
const clipboard = require('clipboardy');

const { render } = require('./helpers/render-html');
const { getData, getAbstract } = require('./helpers/data');
const { wrap } = require('./helpers/wrap-text');

async function run({ '--copy': shouldCopy }) {
  const data = await getData();
  const talks = data.currentTalkTopics._list;

  const choices = talks.map(project => {
    const [link, keywords] = project
      .trim()
      .split('|')
      .map(x => x.trim());
    const href = link.slice(link.indexOf('](') + 2, link.length - 1);
    const title = link.slice(link.indexOf('[') + 1, link.indexOf(']('));
    return {
      name: title,
      value: href,
      message: `${title} ${chalk.dim('|')} ${chalk.dim(keywords)}`,
    };
  });

  try {
    const prompt = new Select({
      type: 'select',
      name: 'project',
      message: `Select a talk to view`,
      choices: choices,
      result() {
        return this.focused.value;
      },
    });
    const response = await prompt.run();
    if (response) {
      console.log(response);
      const abstract = await getAbstract(response);
      let wrapLength = windowSize.width - 5;
      if (wrapLength > 80) {
        wrapLength = 80;
      }
      console.log(wrap('\n\n' + render(abstract)));
      if (shouldCopy) {
        clipboard.writeSync(abstract);
      }
    }
  } catch {}
}

module.exports = { run };

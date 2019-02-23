const { Select } = require('enquirer');
const opn = require('opn');
const stripIndent = require('common-tags/lib/stripIndent');
const chalk = require('chalk');

const { render } = require('./helpers/render-html');
const { getData } = require('./helpers/data');

async function run() {
  const data = await getData();
  const projects = data.openSourceProjects._list;

  const descriptionMap = new Map();
  const choices = projects.map(project => {
    const [link, description] = project
      .trim()
      .split('|')
      .map(x => x.trim());
    const href = link.slice(link.indexOf('(') + 1, link.indexOf(')'));
    descriptionMap.set(href, render(description).trim());
    return {
      name: href,
      value: href,
      message: render(link).trim(),
    };
  });

  try {
    const prompt = new Select({
      type: 'select',
      name: 'project',
      message:
        'Which one would you like to open in your browser? (ESC to exit)',
      choices: choices,
      footer() {
        const description = descriptionMap.get(prompt.focused.name);
        return stripIndent`
        ${chalk.dim('-----------------')}
        ${chalk.bold('Description:')}
        ${description}
        `;
      },
    });
    const response = await prompt.run();
    if (response) {
      opn(response);
      process.exit(0);
    }
  } catch {}
}

module.exports = { run };

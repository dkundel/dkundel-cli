const fetch = require('@zeit/fetch')();

async function getData() {
  const resp = await fetch('https://dkundel.com/dkundel-md.json');
  const data = await resp.json();
  return data;
}

async function getAbstract(abstractUrl) {
  const url = abstractUrl
    .replace('github.com/', 'raw.githubusercontent.com/')
    .replace('/blob/', '/');

  const resp = await fetch(url);
  return resp.text();
}

module.exports = { getData, getAbstract };

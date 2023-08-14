const { readFile } = require('node:fs/promises');

const config = {
  data: {
    permalink: '/admin/config.yml',
  },
  render: async function ({ config, locale }) {
    const texts = locale[config.language] || locale.en;
    const file = await readFile('./src/decap/config.yml');
    const configFile = file.toString().replace(/'\${([^}]+)}'/gm, (_braket, keys) => {
      const split = keys.split('.');
      const value = split.reduce((obj, key) => obj[key], texts) || config[keys];
      return value;
    });
    return configFile;
  },
};

module.exports = config;

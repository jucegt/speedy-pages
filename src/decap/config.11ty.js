const { readFile } = require('fs/promises');

const config = {
  data: {
    permalink: '/admin/config.yml',
  },
  render: async function ({ metadata }) {
    const file = await readFile('./src/decap/config.yml');
    const configFile = file
      .toString()
      .replace(/'{{site_url}}'/gi, metadata.url);
    return configFile;
  },
};

module.exports = config;

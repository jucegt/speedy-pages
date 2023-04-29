const { readFile } = require('fs/promises');

const config = {
  data: {
    permalink: '/admin/config.yml',
  },
  render: ({ metadata }) => {
    return readFile('./src/decap/config.yml').then((file) => {
      const configFile = file
        .toString()
        .replace(/'{{site_url}}'/gi, metadata.url);
      return configFile;
    });
  },
};

module.exports = config;

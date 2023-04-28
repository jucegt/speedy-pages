const ignores = require('./src/includes/ignores');
const collections = require('./src/includes/collections');

const eleventy = (config) => {
  ignores(config);
  collections(config);

  return {
    dir: {
      input: '.',
      output: '.11ty',
      includes: 'src/includes',
      layouts: 'src/layouts',
      data: 'src/data',
    },
  };
};

module.exports = eleventy;

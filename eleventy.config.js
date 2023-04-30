const ignores = require('./src/eleventy/ignores');
const collections = require('./src/eleventy/collections');
const transforms = require('./src/eleventy/transforms');

const eleventy = (config) => {
  ignores(config);
  collections(config);
  transforms(config);

  return {
    dir: {
      input: '.',
      output: '.11ty',
      layouts: 'src/layouts',
      data: 'src/data',
    },
  };
};

module.exports = eleventy;

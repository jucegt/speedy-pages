const ignores = require('./src/eleventy/ignores');
const watchers = require('./src/eleventy/watchers');
const collections = require('./src/eleventy/collections');
const transforms = require('./src/eleventy/transforms');
const passthrough = require('./src/eleventy/passthrough');

const eleventy = function (config) {
  ignores(config);
  watchers(config);
  collections(config);
  transforms(config);
  passthrough(config);

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

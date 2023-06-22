const scss = require('./scss');
const js = require('./js');

const watchers = (config) => {
  scss(config);
  js(config);
};

module.exports = watchers;

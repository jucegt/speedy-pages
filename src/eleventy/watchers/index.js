const scss = require('./scss');
const js = require('./js');

const watchers = function (config) {
  scss(config);
  js(config);
};

module.exports = watchers;

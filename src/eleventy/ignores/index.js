const root = require('./root');
const src = require('./src');

const ignores = function (config) {
  root(config);
  src(config);
};

module.exports = ignores;

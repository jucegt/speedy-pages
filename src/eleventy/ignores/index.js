const root = require('./root');
const src = require('./src');

const ignores = (config) => {
  root(config);
  src(config);
};

module.exports = ignores;

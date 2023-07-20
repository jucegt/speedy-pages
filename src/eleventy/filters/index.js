const date = require('./date');

const filters = function (config) {
  config.addFilter('date', date);
};

module.exports = filters;

const date = require('./date');
const parseHTML = require('./parse-html');

const filters = function (config) {
  config.addFilter('date', date);
  config.addFilter('parseHTML', parseHTML);
};

module.exports = filters;

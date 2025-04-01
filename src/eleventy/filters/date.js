const config = require('../../../speedy.config');

const date = function (date, short = false) {
  if (!date) return null;
  let format = { year: 'numeric', month: 'long', day: 'numeric' };
  if (short) format = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(config.language, format);
};

module.exports = date;

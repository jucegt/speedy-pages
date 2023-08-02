const parseHTML = require('../eleventy/filters/parse-html');

const readingTime = function (content) {
  const words = parseHTML(content);
  const wordsPerMinute = 200;
  const wordsCount = words.split(/\s+/).length;
  const readingTime = Math.ceil(wordsCount / wordsPerMinute);

  return readingTime;
};

module.exports = readingTime;

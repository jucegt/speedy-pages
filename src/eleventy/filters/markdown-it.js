const markdown = require('markdown-it');

const md = new markdown({
  html: true,
});

const markdownIt = function (content) {
  return md.render(content);
};

module.exports = markdownIt;

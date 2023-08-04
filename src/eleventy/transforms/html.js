const minified = require('html-minifier').minify;

const html = function (content, outputPath) {
  if (outputPath && outputPath.endsWith('.html')) {
    return minified(content, {
      removeComments: true,
      collapseWhitespace: true,
    });
  }
  return content;
};

module.exports = html;

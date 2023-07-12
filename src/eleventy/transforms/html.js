const minified = require('html-minifier').minify;

const html = (content, outputPath) => {
  if (outputPath.endsWith('.html')) {
    return minified(content, {
      removeComments: true,
      collapseWhitespace: true,
    });
  }
  return content;
};

module.exports = html;

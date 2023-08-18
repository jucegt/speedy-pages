const lazy = function (content, outputPath) {
  if (outputPath && outputPath.endsWith('.html')) {
    return content.replace(/loading="lazy"/g, '').replace(/data-hero=""/g, '');
  }
  return content;
};

module.exports = lazy;

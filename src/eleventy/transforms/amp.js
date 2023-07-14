const optimizer = require('@ampproject/toolbox-optimizer').create({
  minify: true,
});

const amp = function (content, outputPath) {
  if (outputPath && outputPath.endsWith('.html') && !outputPath.includes('/admin/')) {
    return optimizer.transformHtml(content).then((optimizedHtml) => {
      return optimizedHtml;
    });
  }
  return content;
};

module.exports = amp;

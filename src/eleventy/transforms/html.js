const optimizer = require('@ampproject/toolbox-optimizer').create();

const html = (content, outputPath) => {
  if (
    outputPath &&
    outputPath.endsWith('.html') &&
    !outputPath.includes('/admin/')
  ) {
    return optimizer.transformHtml(content).then((optimizedHtml) => {
      return optimizedHtml;
    });
  }
  return content;
};

module.exports = html;

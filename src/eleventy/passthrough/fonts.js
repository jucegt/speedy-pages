const fonts = function (config) {
  config.addPassthroughCopy({ 'src/assets/fonts': 'static/fonts' });
};

module.exports = fonts;

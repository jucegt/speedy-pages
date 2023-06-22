const fonts = (config) => {
  config.addPassthroughCopy({ 'src/assets/fonts': 'static/fonts' });
};

module.exports = fonts;

const fs = require('node:fs').promises;
const path = require('node:path');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const inlineCss = async (file) => {
  const styles = await fs.readFile(path.resolve(__dirname, `../assets/css/${file}`)).then(async (css) => {
    const minified = await postcss([autoprefixer, cssnano]).process(css, {
      from: '',
      to: '',
    });
    return minified.css;
  });

  return styles;
};

module.exports = inlineCss;

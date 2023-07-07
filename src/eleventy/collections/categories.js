const categories = (collection) => {
  return collection.getFilteredByGlob('./content/categories/*.md').reverse();
};

module.exports = categories;

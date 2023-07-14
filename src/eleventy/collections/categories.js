const categories = function (collection) {
  return collection.getFilteredByGlob('./content/categories/*.md').reverse();
};

module.exports = categories;

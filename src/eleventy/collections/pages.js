const pages = function (collection) {
  return collection.getFilteredByGlob('./content/pages/*.md');
};

module.exports = pages;

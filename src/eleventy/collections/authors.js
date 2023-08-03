const authors = function (collection) {
  return collection.getFilteredByGlob('./content/authors/*.md');
};

module.exports = authors;

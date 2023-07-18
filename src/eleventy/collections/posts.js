const posts = function (collection) {
  return collection.getFilteredByGlob('./content/posts/**.md').reverse();
};

module.exports = posts;

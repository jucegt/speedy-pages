const posts = (config) => {
  config.addCollection('posts', (collection) => {
    return collection.getFilteredByGlob('./content/posts/*.md');
  });
};

module.exports = posts;

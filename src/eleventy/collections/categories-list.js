const categoriesList = function (config) {
  return function (collection) {
    const posts = require('./posts')(collection);
    const categoriesNames = new Set();
    const categoriesList = [];

    posts?.map((post) => {
      if ('category' in post.data) {
        categoriesNames.add(post.data.category);
      }
    });

    [...categoriesNames]?.map((category) => {
      categoriesList.push({
        name: category,
        url: `/${config.getFilter('slugify')(category)}/`,
        posts: posts.filter((post) => post.data.category === category).length,
      });
    });

    return categoriesList;
  };
};

module.exports = categoriesList;

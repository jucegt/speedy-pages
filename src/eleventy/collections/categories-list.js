const categoriesList = function (config) {
  return function (collection) {
    const posts = require('./posts')(collection);
    const categories = require('./categories')(collection);
    const categoriesSlug = new Set();
    const categoriesList = [];

    posts?.map((post) => {
      if ('category' in post.data.info) {
        categoriesSlug.add(post.data.info.category);
      }
    });

    [...categoriesSlug]?.map((category) => {
      const categoryInfo = categories?.find((cat) => cat.data.seo.slug === category);
      categoriesList.push({
        name: categoryInfo.data.seo.title,
        url: `/${config.getFilter('slugify')(category)}/`,
        posts: posts.filter((post) => post.data.info.category === category).length,
      });
    });

    console.log(categoriesList);

    return categoriesList;
  };
};

module.exports = categoriesList;

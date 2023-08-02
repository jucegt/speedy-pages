const categoryBySlug = function (collection) {
  const categories = require('./categories')(collection);

  const categoryBySlug = {};
  categories.forEach((category) => {
    if (category.data.seo.slug) {
      if (!categoryBySlug[category.data.seo.slug]) {
        categoryBySlug[category.data.seo.slug] = category;
      }
    }
  });
  return categoryBySlug;
};

module.exports = categoryBySlug;

const categoryByName = function (collection) {
  const categories = require('./categories')(collection);

  const categoryByName = {};
  categories.forEach((category) => {
    if (category.data.title) {
      if (!categoryByName[category.data.title]) {
        categoryByName[category.data.title] = category;
      }
    }
  });
  return categoryByName;
};

module.exports = categoryByName;

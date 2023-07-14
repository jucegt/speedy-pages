const categoriesMenu = function (config) {
  return function (collection) {
    const categories = require('./categories')(collection);
    const categoriesInMenu = [];

    const categoriesMenu = categories.filter((category) => category.data.showmenu);

    categoriesMenu.map((category) => {
      categoriesInMenu.push({
        name: category.data.title,
        url: config.getFilter('slugify')(category.data.title),
      });
    });

    return categoriesInMenu;
  };
};

module.exports = categoriesMenu;

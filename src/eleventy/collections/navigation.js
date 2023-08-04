const navigation = function (config) {
  return function (collection) {
    const { navMenu } = require('./settings');
    const categories = require('./categories')(collection);
    const pages = require('./pages')(collection);
    const navInfo = navMenu(collection);
    const nav = [];

    navInfo?.categories?.map((category) => {
      const info = categories.find((cat) => cat.data.seo.slug === category.name);
      nav.push({
        name: info.data.seo.title,
        url: `/${config.getFilter('slugify')(info.data.seo.slug)}/`,
      });
    });
    navInfo?.pages?.map((page) => {
      const info = pages.find((pag) => pag.data.seo.slug === page.name);
      nav.push({
        name: info.data.seo.title,
        url: `/${config.getFilter('slugify')(info.data.seo.slug)}/`,
      });
    });

    return nav;
  };
};

module.exports = navigation;

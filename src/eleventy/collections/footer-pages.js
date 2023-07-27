const footerPages = function (config) {
  return function (collection) {
    const { footer } = require('./settings');
    const linksSettings = footer(collection);
    const linkList = linksSettings.pages;
    const pages = [];

    linkList?.map((page) => {
      pages.push({
        name: page.page,
        url: `/${config.getFilter('slugify')(page.page)}`,
      });
    });

    return pages;
  };
};

module.exports = footerPages;

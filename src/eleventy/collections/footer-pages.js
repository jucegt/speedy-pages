const footerPages = function (config) {
  return function (collection) {
    const { footer } = require('./settings');
    const pages = require('./pages')(collection);
    const linksSettings = footer(collection);
    const linkList = linksSettings.pages;
    const links = [];

    linkList?.map((page) => {
      const info = pages.find((pag) => pag.data.seo.slug === page.page);
      links.push({
        name: info.data.seo.title,
        url: `/${config.getFilter('slugify')(page.page)}`,
      });
    });

    return links;
  };
};

module.exports = footerPages;

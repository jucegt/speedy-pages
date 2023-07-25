const footerPages = function (config) {
  return function (collection) {
    const { links } = require('./settings');
    const linksSettings = links(collection);
    const linkList = linksSettings.footerpages;
    const footerPages = [];

    linkList?.map((item) => {
      footerPages.push({
        name: item.page,
        url: `/${config.getFilter('slugify')(item.page)}`,
      });
    });

    return footerPages;
  };
};

module.exports = footerPages;

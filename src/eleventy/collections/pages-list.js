const pagesList = function (collection) {
  const pages = require('./pages')(collection);
  const pagesList = [];

  pages.map((page) => {
    pagesList.push({
      name: page.data.title,
      url: page.page.url,
    });
  });

  return pagesList;
};

module.exports = pagesList;

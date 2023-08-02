const speedy = require('../../../speedy.config');

const pagedCategories = function (config) {
  return function (collection) {
    const posts = require('./posts')(collection);
    const categories = require('./categories')(collection);
    const { postsPerPage } = speedy.ui;
    const pagedPosts = [];

    categories.forEach((category) => {
      const postByCategory = posts.filter((post) => post.data.info.category === category.data.seo.slug);
      const numberOfPages = Math.ceil(postByCategory.length / postsPerPage);

      for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
        const sliceFrom = (pageNum - 1) * postsPerPage;
        const sliceTo = sliceFrom + postsPerPage;

        pagedPosts.push({
          title: category.data.seo.heading || category.data.seo.title,
          slug: category.data.seo.slug,
          items: postByCategory.slice(sliceFrom, sliceTo),
          pageNumber: pageNum,
          total: numberOfPages,
          page: {
            previous: pageNum === 1 ? null : pageNum - 1,
            next: pageNum === numberOfPages ? null : pageNum + 1,
            first: pageNum === 1,
            last: pageNum === numberOfPages,
          },
          previousPageLink:
            pageNum === 1
              ? null
              : `/${config.getFilter('slugify')(category.data.seo.slug)}/${
                  pageNum - 1 === 1 ? null : `${pageNum - 1}/`
                }`,
          nextPageLink:
            pageNum === numberOfPages
              ? null
              : `/${config.getFilter('slugify')(category.data.seo.slug)}/${pageNum + 1}/`,
        });
      }
    });

    return pagedPosts;
  };
};

module.exports = pagedCategories;

const speedy = require('../../../speedy.config');

const pagedPosts = function (collection) {
  const posts = require('./posts')(collection).sort((a, b) => new Date(b.data.info.date) - new Date(a.data.info.date));
  const { postsPerPage } = speedy.ui;
  const pagedPosts = [];
  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * postsPerPage;
    const sliceTo = sliceFrom + postsPerPage;

    pagedPosts.push({
      items: posts.slice(sliceFrom, sliceTo),
      pageNumber: pageNum,
      total: numberOfPages,
      page: {
        previous: pageNum === 1 ? null : pageNum - 1,
        next: pageNum === numberOfPages ? null : pageNum + 1,
        first: pageNum === 1,
        last: pageNum === numberOfPages,
      },
      previousPageLink: pageNum === 1 ? null : `/${pageNum - 1 === 1 ? '' : `${pageNum - 1}/`}`,
      nextPageLink: pageNum === numberOfPages ? null : `/${pageNum + 1}/`,
    });
  }

  return pagedPosts;
};

module.exports = pagedPosts;

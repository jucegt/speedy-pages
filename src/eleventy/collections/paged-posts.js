const speedy = require('../../../speedy.config');

const pagedPosts = function (collection) {
  const posts = require('./posts')(collection);
  const { postsPerPage } = speedy.ui;
  const pagedPosts = [];
  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * postsPerPage;
    const sliceTo = sliceFrom + postsPerPage;

    pagedPosts.push({
      number: pageNum,
      total: numberOfPages,
      posts: posts.slice(sliceFrom, sliceTo),
      first: pageNum === 1,
      last: pageNum === numberOfPages,
    });
  }

  return pagedPosts;
};

module.exports = pagedPosts;

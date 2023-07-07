const speedy = require('../../../speedy.config');

const pagedCategories = (collection) => {
  const posts = require('./posts')(collection);
  const categories = require('./categories')(collection);
  const { postsPerPage } = speedy.ui;
  const pagedPosts = [];

  categories.forEach((category) => {
    const postByCategory = posts.filter(
      (post) => post.data.category === category.name,
    );
    const numberOfPages = Math.ceil(postByCategory.length / postsPerPage);

    for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
      const sliceFrom = (pageNum - 1) * postsPerPage;
      const sliceTo = sliceFrom + postsPerPage;

      pagedPosts.push({
        title: category.name,
        number: pageNum,
        total: numberOfPages,
        posts: postByCategory.slice(sliceFrom, sliceTo),
        first: pageNum === 1,
        last: pageNum === numberOfPages,
      });
    }
  });

  return pagedPosts;
};

module.exports = pagedCategories;

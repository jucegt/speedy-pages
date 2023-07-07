const categoriesList = (collection) => {
  const posts = require('./posts')(collection);
  const categoriesNames = new Set();
  const categoriesList = [];

  posts.map((post) => {
    if ('category' in post.data) {
      categoriesNames.add(post.data.category);
    }
  });

  [...categoriesNames].map((category) => {
    categoriesList.push({
      name: category,
      posts: posts.filter((post) => post.data.category === category).length,
    });
  });
  const categoriesAndPosts = categoriesList.sort((a, b) => b.posts - a.posts);

  return categoriesAndPosts;
};

module.exports = categoriesList;

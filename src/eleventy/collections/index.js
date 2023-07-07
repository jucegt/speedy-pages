const posts = require('./posts');
const categories = require('./categories');
const categoryByName = require('./category-by-name');
const categoriesList = require('./categories-list');
const pagedPosts = require('./paged-posts');
const pagedCategories = require('./paged-categories');

const collections = (config) => {
  config.addCollection('posts', posts);
  config.addCollection('categories', categories);
  config.addCollection('categoryByName', categoryByName);
  config.addCollection('categoriesList', categoriesList);
  config.addCollection('pagedPosts', pagedPosts);
  config.addCollection('pagedCategories', pagedCategories);
};

module.exports = collections;

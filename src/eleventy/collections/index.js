const posts = require('./posts');
const categories = require('./categories');
const pages = require('./pages');
const pagedPosts = require('./paged-posts');
const pagedCategories = require('./paged-categories');
const categoryByName = require('./category-by-name');
const categoriesList = require('./categories-list');
const pagesList = require('./pages-list');
const categoriesMenu = require('./categories-menu');

const collections = function (config) {
  config.addCollection('posts', posts);
  config.addCollection('categories', categories);
  config.addCollection('pages', pages);
  config.addCollection('pagedPosts', pagedPosts);
  config.addCollection('pagedCategories', pagedCategories);
  config.addCollection('categoryByName', categoryByName);
  config.addCollection('categoriesList', categoriesList(config));
  config.addCollection('pagesList', pagesList);
  config.addCollection('categoriesMenu', categoriesMenu(config));
};

module.exports = collections;

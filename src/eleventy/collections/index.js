const posts = require('./posts');
const categories = require('./categories');
const pages = require('./pages');
const pagedPosts = require('./paged-posts');
const pagedCategories = require('./paged-categories');
const categoryByName = require('./category-by-name');
const categoriesList = require('./categories-list');
const categoriesMenu = require('./categories-menu');
const { seo, socialMedia, links } = require('./settings');
const footerPages = require('./footer-pages');

const collections = function (config) {
  config.addCollection('posts', posts);
  config.addCollection('categories', categories);
  config.addCollection('pages', pages);
  config.addCollection('pagedPosts', pagedPosts);
  config.addCollection('pagedCategories', pagedCategories(config));
  config.addCollection('categoryByName', categoryByName);
  config.addCollection('categoriesList', categoriesList(config));
  config.addCollection('categoriesMenu', categoriesMenu(config));
  config.addCollection('seo', seo);
  config.addCollection('socialMedia', socialMedia);
  config.addCollection('links', links);
  config.addCollection('footerPages', footerPages(config));
};

module.exports = collections;

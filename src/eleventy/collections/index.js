const posts = require('./posts');
const categories = require('./categories');
const pages = require('./pages');
const authors = require('./authors');
const pagedPosts = require('./paged-posts');
const pagedCategories = require('./paged-categories');
const categoryBySlug = require('./category-by-slug');
const categoriesList = require('./categories-list');
const navigation = require('./navigation');
const { homePage, logo, socialMedia, footer } = require('./settings');
const footerPages = require('./footer-pages');

const collections = function (config) {
  config.addCollection('posts', posts);
  config.addCollection('categories', categories);
  config.addCollection('pages', pages);
  config.addCollection('authors', authors);
  config.addCollection('pagedPosts', pagedPosts);
  config.addCollection('pagedCategories', pagedCategories(config));
  config.addCollection('categoryBySlug', categoryBySlug);
  config.addCollection('categoriesList', categoriesList(config));
  config.addCollection('navigation', navigation(config));
  config.addCollection('homePage', homePage);
  config.addCollection('logo', logo);
  config.addCollection('socialMedia', socialMedia);
  config.addCollection('footer', footer);
  config.addCollection('footerPages', footerPages(config));
};

module.exports = collections;

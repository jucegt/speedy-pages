const settings = {
  homePage: function (collection) {
    return collection.getFilteredByGlob('./content/settings/home-page.md')[0].data;
  },
  logo: function (collection) {
    return collection.getFilteredByGlob('./content/settings/logo.md')[0].data;
  },
  socialMedia: function (collection) {
    return collection.getFilteredByGlob('./content/settings/social-media.md')[0].data;
  },
  links: function (collection) {
    return collection.getFilteredByGlob('./content/settings/links.md')[0].data;
  },
};

module.exports = settings;

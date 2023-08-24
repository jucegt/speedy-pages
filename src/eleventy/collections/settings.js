const settings = {
  branding: function (collection) {
    return collection.getFilteredByGlob('./content/settings/branding.md')[0].data;
  },
  homePage: function (collection) {
    return collection.getFilteredByGlob('./content/settings/home-page.md')[0];
  },
  navMenu: function (collection) {
    return collection.getFilteredByGlob('./content/settings/navigation.md')[0].data;
  },
  socialMedia: function (collection) {
    return collection.getFilteredByGlob('./content/settings/social-media.md')[0].data;
  },
  footer: function (collection) {
    return collection.getFilteredByGlob('./content/settings/footer.md')[0].data;
  },
};

module.exports = settings;

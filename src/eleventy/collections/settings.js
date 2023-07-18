const settings = {
  seo: function (collection) {
    return collection.getFilteredByGlob('./content/settings/seo.md')[0].data;
  },
  socialMedia: function (collection) {
    return collection.getFilteredByGlob('./content/settings/social-media.md')[0].data;
  },
  links: function (collection) {
    return collection.getFilteredByGlob('./content/settings/links.md')[0].data;
  },
};

module.exports = settings;

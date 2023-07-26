const { readFile } = require('fs/promises');

const config = {
  data: {
    permalink: '/admin/config.yml',
  },
  render: async function ({ config, locale }) {
    const texts = locale[config.language];
    const file = await readFile('./src/decap/config.yml');
    const configFile = file
      .toString()
      .replace(/'{{site_url}}'/gi, config.url)
      .replace(/'{{language}}'/gi, config.language)
      .replace(/'{{posts.plural}}'/gi, texts.posts.plural)
      .replace(/'{{posts.singular}}'/gi, texts.posts.singular)
      .replace(/'{{posts.seo.label}}'/gi, texts.posts.seo.label)
      .replace(/'{{posts.seo.title.label}}'/gi, texts.posts.seo.title.label)
      .replace(/'{{posts.seo.title.hint}}'/gi, texts.posts.seo.title.hint)
      .replace(/'{{posts.seo.slug.label}}'/gi, texts.posts.seo.slug.label)
      .replace(/'{{posts.seo.slug.hint}}'/gi, texts.posts.seo.slug.hint)
      .replace(/'{{posts.seo.description.label}}'/gi, texts.posts.seo.description.label)
      .replace(/'{{posts.seo.description.error}}'/gi, texts.posts.seo.description.error)
      .replace(/'{{posts.seo.description.hint}}'/gi, texts.posts.seo.description.hint)
      .replace(/'{{posts.info.label}}'/gi, texts.posts.info.label)
      .replace(/'{{posts.info.title.label}}'/gi, texts.posts.info.title.label)
      .replace(/'{{posts.info.title.hint}}'/gi, texts.posts.info.title.hint)
      .replace(/'{{posts.info.category.label}}'/gi, texts.posts.info.category.label)
      .replace(/'{{posts.info.category.hint}}'/gi, texts.posts.info.category.hint)
      .replace(/'{{posts.info.date.label}}'/gi, texts.posts.info.date.label)
      .replace(/'{{posts.info.date.hint}}'/gi, texts.posts.info.date.hint)
      .replace(/'{{posts.info.author.label}}'/gi, texts.posts.info.author.label)
      .replace(/'{{posts.info.author.hint}}'/gi, texts.posts.info.author.hint)
      .replace(/'{{posts.info.excerpt.label}}'/gi, texts.posts.info.excerpt.label)
      .replace(/'{{posts.content.label}}'/gi, texts.posts.content.label)
      .replace(/'{{posts.content.heroImage.label}}'/gi, texts.posts.content.heroImage.label)
      .replace(/'{{posts.content.heroImage.hint}}'/gi, texts.posts.content.heroImage.hint)
      .replace(/'{{posts.content.body.label}}'/gi, texts.posts.content.body.label)
      .replace(/'{{posts.content.body.hint}}'/gi, texts.posts.content.body.hint)
      .replace(/'{{categories.plural}}'/gi, texts.categories.plural)
      .replace(/'{{categories.singular}}'/gi, texts.categories.singular)
      .replace(/'{{categories.seo.label}}'/gi, texts.categories.seo.label)
      .replace(/'{{categories.seo.title.label}}'/gi, texts.categories.seo.title.label)
      .replace(/'{{categories.seo.title.hint}}'/gi, texts.categories.seo.title.hint)
      .replace(/'{{categories.seo.slug.label}}'/gi, texts.categories.seo.slug.label)
      .replace(/'{{categories.seo.slug.hint}}'/gi, texts.categories.seo.slug.hint)
      .replace(/'{{categories.seo.description.label}}'/gi, texts.categories.seo.description.label)
      .replace(/'{{categories.seo.description.error}}'/gi, texts.categories.seo.description.error)
      .replace(/'{{categories.seo.description.hint}}'/gi, texts.categories.seo.description.hint)
      .replace(/'{{categories.info.label}}'/gi, texts.categories.info.label)
      .replace(/'{{categories.info.showMenu.label}}'/gi, texts.categories.info.showMenu.label)
      .replace(/'{{categories.info.showMenu.hint}}'/gi, texts.categories.info.showMenu.hint)
      .replace(/'{{categories.info.title.label}}'/gi, texts.categories.info.title.label)
      .replace(/'{{categories.info.title.hint}}'/gi, texts.categories.info.title.hint)
      .replace(/'{{categories.info.body.label}}'/gi, texts.categories.info.body.label)
      .replace(/'{{categories.info.body.hint}}'/gi, texts.categories.info.body.hint)
      .replace(/'{{authors.plural}}'/gi, texts.authors.plural)
      .replace(/'{{authors.singular}}'/gi, texts.authors.singular)
      .replace(/'{{authors.title.label}}'/gi, texts.authors.title.label)
      .replace(/'{{authors.title.hint}}'/gi, texts.authors.title.hint)
      .replace(/'{{authors.photo.label}}'/gi, texts.authors.photo.label)
      .replace(/'{{authors.photo.hint}}'/gi, texts.authors.photo.hint)
      .replace(/'{{pages.plural}}'/gi, texts.pages.plural)
      .replace(/'{{pages.singular}}'/gi, texts.pages.singular)
      .replace(/'{{pages.seo.label}}'/gi, texts.pages.seo.label)
      .replace(/'{{pages.seo.title.label}}'/gi, texts.pages.seo.title.label)
      .replace(/'{{pages.seo.title.hint}}'/gi, texts.pages.seo.title.hint)
      .replace(/'{{pages.seo.slug.label}}'/gi, texts.pages.seo.slug.label)
      .replace(/'{{pages.seo.slug.hint}}'/gi, texts.pages.seo.slug.hint)
      .replace(/'{{pages.seo.description.label}}'/gi, texts.pages.seo.description.label)
      .replace(/'{{pages.seo.description.error}}'/gi, texts.pages.seo.description.error)
      .replace(/'{{pages.seo.description.hint}}'/gi, texts.pages.seo.description.hint)
      .replace(/'{{pages.content.label}}'/gi, texts.pages.content.label)
      .replace(/'{{pages.content.title.label}}'/gi, texts.pages.content.title.label)
      .replace(/'{{pages.content.title.hint}}'/gi, texts.pages.content.title.hint)
      .replace(/'{{pages.content.body.label}}'/gi, texts.pages.content.body.label)
      .replace(/'{{pages.content.body.hint}}'/gi, texts.pages.content.body.hint);
    return configFile;
  },
};

module.exports = config;

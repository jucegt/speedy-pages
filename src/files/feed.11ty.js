const feed = {
  data: {
    permalink: '/feed.xml',
  },
  render: function ({ collections, config }) {
    const { homePage, posts, authors } = collections;
    const { seo } = homePage.data;
    const lastPost = posts[0];
    const author = authors.find((author) => author.data.title === lastPost.data.info.author);

    const postsResults = posts
      .map((post) => {
        return /* xml */ `
  <entry>
    <title>${post.data.seo.title}</title>
    <link href="${config.url}${post.url}"/>
    <updated>${this.dateiso(post.date)}</updated>
    <id>${config.url}${post.url}</id>
    <summary>${post.data.info.excerpt}</summary>
    <content>
      <content type="text/html">
        ${post.content.replace(/\n/gm, '').replace(/src="/gm, `src="${config.url}/static/md`).trim()}
      </content>
      <type>text/html</type>
    </content>
  </entry>`;
      })
      .join('');

    return /* xml */ `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${seo.title}</title>
  <subtitle>${seo.description}</subtitle>
  <link href="${config.url}/feed.xml" rel="self"/>
  <link href="${config.url}/"/>
  <updated>${this.dateiso(lastPost.date)}</updated>
  <author>
    <name>${author.data.title}</name>
    <email>${author.data.email}</email>
  </author>
  <id>${config.url}/</id>
  ${postsResults.trim()}
</feed>
`;
  },
};

module.exports = feed;

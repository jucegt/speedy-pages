const sitemap = {
  data: {
    permalink: '/sitemap.xml',
  },
  render: function ({ collections, config }) {
    const { posts, categories, pages } = collections;

    const lastPost = posts[0];

    const postsResults = posts
      .map((post) => {
        return /* xml */ `
  <url>
    <loc>${config.url}${post.url}</loc>
    <lastmod>${this.dateiso(post.date)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
      })
      .join('');

    const categoriesResults = categories
      .map((category) => {
        const lastPostByCategory = posts.find((post) => post.data.info.category === category.data.seo.slug);
        return /* xml */ `
  <url>
    <loc>${config.url}/${category.data.seo.slug}/</loc>
    <lastmod>${this.dateiso(lastPostByCategory.date)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
      })
      .join('');

    const pagesResults = pages
      .map((page) => {
        return /* xml */ `
  <url>
    <loc>${config.url}/${page.data.seo.slug}/</loc>
    <lastmod>${this.dateiso(page.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
`;
      })
      .join('');

    return /* xml */ `
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${config.url}/</loc>
    <lastmod>${this.dateiso(lastPost.date)}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${postsResults.trim()}
  ${categoriesResults.trim()}
  ${pagesResults.trim()}
</urlset>
`;
  },
};

module.exports = sitemap;

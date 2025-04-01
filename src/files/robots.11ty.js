const robots = {
  data: {
    permalink: '/robots.txt',
  },
  render: function ({ config }) {
    return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*{{item.url}}$
Disallow: /*{{item.url}}/$

Sitemap: ${config.url}/sitemap.xml`;
  },
};

module.exports = robots;

const robots = {
  data: {
    permalink: '/robots.txt',
  },
  render: function ({ config }) {
    return `User-agent: *
Disallow: /admin/
Allow: /

Sitemap: ${config.url}/sitemap.xml`;
  },
};

module.exports = robots;

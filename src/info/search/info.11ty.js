const searchInfo = {
  data: {
    permalink: '/search/info.json',
  },
  render: function ({ collections }) {
    const { posts, categories, pages } = collections;
    const postsResults = posts
      .map((post) => {
        const category = categories.find((cat) => cat.data.seo.slug === post.data.info.category);
        return `{
      "type": "post",
      "title": "${post.data.seo.title}",
      "heading": "${post.data.info.title}",
      "url": "${post.url}",
      "description": "${post.data.seo.description}",
      "date": "${this.date(post.data.info.date)}",
      "image": {
        "default": {
          "src": "${this.src(post.data.image)}",
          "srcSet": "${this.srcSet(post.data.image)}"
        },
        "webp": {
          "src": "${this.src(post.data.image, true)}",
          "srcSet": "${this.srcSet(post.data.image, true)}"
        }
      },
      "category": {
        "title": "${category.data.seo.title}",
        "heading": "${category.data.seo.heading}",
        "url": "/${category.data.seo.slug}/"
      }
    }
`;
      })
      .join(',');

    const categoriesResults = categories
      .map((category) => {
        return `{
      "type": "category",
      "title": "${category.data.seo.title}",
      "heading": "${category.data.seo.heading}",
      "url": "/${category.data.seo.slug}/",
      "description": "${category.data.seo.description}"
    }
`;
      })
      .join(',');

    const pagesResults = pages
      .map((page) => {
        return `{
      "type": "page",
      "title": "${page.data.seo.title}",
      "heading": "${page.data.seo.heading}",
      "url": "/${page.data.seo.slug}/",
      "description": "${page.data.seo.description}"
    }
`;
      })
      .join(',');

    return `{
  "pages": [
    ${postsResults.trim()},
    ${categoriesResults.trim()},
    ${pagesResults.trim()}
  ]
}`;
  },
};

module.exports = searchInfo;

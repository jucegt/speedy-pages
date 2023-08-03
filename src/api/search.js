import Fuse from 'fuse.js';
import data from '../../.11ty/search/info.json';

export const handler = async ({ queryStringParameters }) => {
  const { q } = queryStringParameters;
  if (!q) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: true, message: 'Missing search parameter' }),
    };
  }
  const fuse = new Fuse(data.pages, {
    keys: ['title', 'heading', 'description'],
  });
  const results = fuse.search(q);

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ results }),
  };
};

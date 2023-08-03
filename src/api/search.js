import data from '../../.11ty/search/info.json';

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ results: data.pages }),
  };
};

const handler = async () => {
  return {
    status: 200,
    body: JSON.stringify({ message: 'Search API' }),
  };
};

module.exports = { handler };

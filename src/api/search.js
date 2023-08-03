const handler = async (event) => {
  return {
    status: 200,
    body: JSON.stringify({ event }),
  };
};

module.exports = { handler };

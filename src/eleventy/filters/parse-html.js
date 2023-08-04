const parseHTML = function (content) {
  return content
    .replaceAll(/<\/?[^>]+(>|$)/gi, '')
    .replace(/\n/g, ' ')
    .trim();
};

module.exports = parseHTML;

const pagination = function (pagination, texts) {
  const { page, pageNumber, total, previousPageLink, nextPageLink } = pagination;
  return /* html */ `
    <nav class="pagination">
      ${
        !page.first
          ? /* html */ `
            <a class="pagination__btn" href="${previousPageLink}">${texts.pagination.prev}</a>
          `
          : /* html */ `
            <span class="pagination__btn">${texts.pagination.prev}</span>
          `
      }

      <span><strong>${pageNumber}</strong> ${texts.pagination.of} <strong>${total}</strong></span>

      ${
        !page.last
          ? /* html */ `
            <a class="pagination__btn" href="${nextPageLink}">${texts.pagination.next}</a>
          `
          : /* html */ `
            <span class="pagination__btn">${texts.pagination.next}</span>
          `
      }
    </nav>
  `;
};

module.exports = pagination;

const header = (config) => {
  return /* html */ `
    <header class="header">
      <p>Header</p>
      <p>${JSON.stringify(config)}</p>
    </header>
  `;
};

module.exports = header;

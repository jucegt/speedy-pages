const state = function () {
  return /* html */ `
    <amp-state id="global">
      <script type="application/json">
        {
          "menu": false,
          "search": false,
          "query": "",
          "value": ""
        }
      </script>
    </amp-state>
  `;
};

module.exports = state;

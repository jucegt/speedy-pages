const browserconfig = {
  data: {
    permalink: '/browserconfig.xml',
  },
  render: function ({ collections }) {
    const { branding } = collections;
    return /* xml */ `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>${branding.colors.primary}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  },
};

module.exports = browserconfig;

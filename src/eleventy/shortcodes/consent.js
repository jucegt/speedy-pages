const close = require('../../svgs/close');

const consent = function (language) {
  const locale = {
    es: {
      header: 'Aviso Importante',
      title: 'Gestionar el consentimiento de las cookies',
      accept: 'Aceptar',
      reject: 'Denegar',
      dismiss: 'Cerrar',
      content:
        'Tanto nosotros como otros colaboradores utilizamos cookies para analizar datos de manera anónima, asegurar el funcionamiento adecuado del sitio y mostrar anuncios. Nuestros <a href="https://support.google.com/adsense/answer/9012903">socios</a>, incluido Google, podrían almacenar, compartir y gestionar tus datos para ofrecer anuncios a tu medida. Tú tienes el control para aceptar o retirar tu consentimiento en cualquier momento.',
    },
    en: {
      header: 'Important Notice',
      title: 'Manage cookie consent',
      accept: 'Accept',
      reject: 'Reject',
      dismiss: 'Dismiss',
      content:
        'We and our partners use cookies to analyze data anonymously, ensure the proper functioning of the site and display ads. Our <a href="https://support.google.com/adsense/answer/9012903">partners</a>, including Google, may store, share and manage your data to offer you tailored ads. You have control to accept or withdraw your consent at any time.',
    },
  };
  const texts = locale[language] || locale.en;

  return /* html */ `<amp-consent class="consent" id="cookies" layout="nodisplay">
  <script type="application/json">
    {
      "consentInstanceId": "consent-id",
      "consentRequired": true,
      "promptUI": "consent-cookies"
    }
  </script>
  <div class="consent__content" id="consent-cookies">
    <div class="consent__box">
      <div class="consent__header">
        <h2><span>${texts.header}</span></h2>
        <button class="consent__dismiss" on="tap:cookies.dismiss" aria-label="${texts.dismiss}">${close()}</button>
      </div>
      <h3 class="consent__title">${texts.title}</h3>
      <p class="consent__text">${texts.content}</p>
      <div class="consent__buttons">
        <button class="consent__accept" on="tap:cookies.accept">${texts.accept}</button>
        <button class="consent__reject" on="tap:cookies.reject">${texts.reject}</button>
      </div>
    </div>
  </div>
</amp-consent>
`;
};

module.exports = consent;

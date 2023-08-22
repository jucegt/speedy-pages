const page = {
  data: {
    layout: 'base',
  },
  render: function ({ config, locale, content, seo, showContactForm }) {
    const texts = locale[config.language] || locale.en;
    return /* html */ `
      <article class="page">
        <section class="page__header">
          <h1 class="page__title">${seo.heading}</h1>
        </section>
        <section class="page__body">
          <div class="page__content">
            ${content}
          </div>
          ${
            showContactForm
              ? /* html */ `
              <div class="page__contact">
                <form method="POST" enctype="application/x-www-form-urlencoded" action-xhr="/api/contact/" target="_top" class="contact-form">
                  <div class="input">
                    <label for="name">${texts.ui.contact.name}:</label>
                    <input name="name" id="name" type="text" placeholder="${texts.ui.contact.name}" />
                  </div>
                  <div class="input">
                    <label for="email">${texts.ui.contact.email}:</label>
                    <input name="email" id="email" type="text" placeholder="${texts.ui.contact.email}" />
                  </div>
                  <div class="input">
                    <label for="subject">${texts.ui.contact.subject}:</label>
                    <input name="subject" id="subject" type="text" placeholder="${texts.ui.contact.subject}" />
                  </div>
                  <div class="textarea">
                    <label for="message">${texts.ui.contact.message}:</label>
                    <textarea name="message" id="message" placeholder="${texts.ui.contact.message}" rows="8"></textarea>
                  </div>
                  <button type="submit">${texts.ui.contact.send}</button>
                </form>
              </div>
              `
              : ''
          }
        </section>
      </article>
    `;
  },
};

module.exports = page;

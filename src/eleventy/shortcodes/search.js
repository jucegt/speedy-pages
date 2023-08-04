const search = function () {
  const defaultResults = 'search-box';
  return /* html */ `
    <section class="${defaultResults}" [class]="query ? '${defaultResults} search-box--active' : '${defaultResults}'">
      <header class="search-box__header">
        <p><span>Resultados para:</span> <strong [text]="query ? query : ''"></strong></p>
      </header>
      <main class="search-box__content">
        <amp-list
          id="results"
          width="auto"
          height="auto"
          layout="fill"
          src="/search/default.json"
          [src]="query ? '/api/search?q=' + encodeURIComponent(query) : '/search/default.json'"
          binding="no"
        >
          <template type="amp-mustache">
            <article class="search-box__article">
              <header class="article__header">
                {{#item.image}}
                  <amp-img
                    alt="{{item.title}}"
                    src="{item.image.webp.src}"
                    srcset="{{item.image.webp.srcSet}}"
                    width="600"
                    height="480"
                    layout="responsive">
                    <amp-img
                      fallback
                      alt="{{item.title}}"
                      src="{{item.image.default.src}}"
                      srcset="{{item.image.default.srcSet}}"
                      width="600"
                      height="480"
                      layout="responsive">
                    </amp-img>
                  </amp-img>
                {{/item.image}}
                <p><a href="{{item.url}}">{{item.title}}</a></p>
              </header>
              <section class="article__content">
                <p>{{item.description}}</p>
              </section>
            </article>
          </template>
        </amp-list>
      </main>
    </section>
  `;
};

module.exports = search;

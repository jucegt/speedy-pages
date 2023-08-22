const search = function (texts) {
  const defaultResults = 'search-box';
  return /* html */ `
    <section id="searchresults" class="${defaultResults}" [class]="query ? '${defaultResults} search-box--active' : '${defaultResults}'" tabindex="-1">
      <header class="search-box__header">
        <p><span>${texts.search.results}</span> <strong [text]="query ? query : ''"></strong></p>
      </header>
      <main class="search-box__content">
        <amp-list
          id="results"
          width="auto"
          height="100"
          layout="fill"
          src="/search/default.json"
          [src]="query ? '/api/search?q=' + encodeURIComponent(query) : '/search/default.json'"
          binding="no"
          template="search-item-template"
        >
        </amp-list>
      </main>
    </section>
    <script type="text/plain" template="amp-mustache" id="search-item-template">
      <article class="search-box__article">
        <header class="article__header">
          <p><a href="{{item.url}}">{{item.title}}</a></p>
        </header>
        <section class="article__content">
          <p>{{item.description}}</p>
        </section>
      </article>
    </script>
  `;
};

module.exports = search;

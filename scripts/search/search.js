// eslint-disable-next-line max-classes-per-file
import {
  Component, h, render,
} from '../preact.js';
import htm from '../htm.js';
import { loadCSS } from '../lib-franklin.js';
import getRelatedItems from './api.js';
import { renderFallbackImage } from '../commerce.js';

const html = htm.bind(h);

// Used to rate-limit link rewriting, to prevent excessive calls to the Monolith GraphQL API
class RateLimiter {
  constructor(limit, debounce = 0) {
    this.limit = limit;
    this.lastCallAt = null;
    this.nextCallTimeout = null;
    this.debounce = debounce;
    this.debounceTimeout = null;
  }

  #executeInternal(fn) {
    if ((this.lastCallAt && ((Date.now() - this.lastCallAt) >= this.limit)) || !this.lastCallAt) {
      this.lastCallAt = Date.now();
      fn();
    } else {
      const remaining = this.limit - (Date.now() - this.lastCallAt);
      if (this.nextCallTimeout) {
        clearTimeout(this.nextCallTimeout);
      }
      this.nextCallTimeout = setTimeout(() => {
        this.lastCallAt = Date.now();
        fn();
      }, remaining);
    }
  }

  execute(fn) {
    if (this.debounce > 0) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      this.debounceTimeout = setTimeout(() => {
        this.#executeInternal(fn);
      }, this.debounce);
    } else {
      this.#executeInternal(fn);
    }
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchBarElement = props.searchBarElement;
    this.state = { hidden: true, query: '' };
    this.rateLimiter = new RateLimiter(3000, 600);
  }

  runSearch = (query) => {
    this.rateLimiter.execute(async () => {
      const result = await getRelatedItems(query);

      if (result) {
        this.setState({ query, searchResults: result, hidden: false });
      }
    });
  };

  handleChange = (event) => {
    this.runSearch(event.target.value);
  };

  handleFocus = (e) => {
    if (e.target.value.length > 1) {
      this.setState({ hidden: false });
    }
  };

  handleBlur = () => {
    if (!this.searchBarElement.matches(':focus-within')) {
      this.setState({ hidden: true });
    }
  };

  componentDidMount() {
    this.searchBarElement.addEventListener('keyup', this.handleChange);
    this.searchBarElement.querySelector('input[name=q]').addEventListener('blur', this.handleBlur);
    this.searchBarElement.addEventListener('focus', this.handleFocus);
  }

  componentWillUnmount() {
    this.searchBarElement.removeEventListener('keyup', this.handleChange);
    this.searchBarElement.querySelector('input[name=q]').removeEventListener('blur', this.handleBlur);
    this.searchBarElement.removeEventListener('focus', this.handleFocus);
  }

  render() {
    return html`<div class="search-recs" hidden="${this.state.hidden}">
        <div class="top-results">
            <div class="search-recs-title">TOP RESULTS ${this.state.query && 'IN'} ${this.state.query.toUpperCase()}</div>
            <ul>
                ${this.state.searchResults?.topResults?.map(({ productView: item }) => html`
                    <li>
                        <a href="/products/${item.url_key}/${item.sku}">
                            <picture>
                                <source srcset="/product-images/${item.sku.toLowerCase()}.jpg?width=163&bg-color=255,255,255&format=webply&optimize=medium" />
                                <img src="/product-images/${item.sku.toLowerCase()}.jpg" alt="${item.name}" onerror=${renderFallbackImage} />
                            </picture>
                            <div dangerouslySetInnerHTML=${{ __html: item.name }}></div>
                        </a>
                    </li>
                `)}
            </ul>
        </div>
        <div class="related-searches">
            <div class="search-recs-title">RELATED SEARCHES</div>
            <ul>
                ${this.state.searchResults?.recommendedTerms?.map((term) => html`
                    <li>
                        <a href="/search?q=${encodeURIComponent(term)}">${term}</a>
                    </li>
                `)}
            </ul>
        </div>
        <div class="categories">
            <div class="search-recs-title">CATEGORIES</div>
            <ul>
                ${this.state.searchResults?.categories?.map((category) => html`
                    <li>
                        <a href=${category.path} dangerouslySetInnerHTML=${{ __html: category.title }} />
                    </li>
                `)}
            </ul>
        </div>
    </div>`;
  }
}

export default async function initializeSearchRecommendations(searchBarElement) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => loadCSS('../../styles/search-recommendations.css', resolve));
  const searchBoxPlaceholder = document.createElement('div');
  searchBarElement.appendChild(searchBoxPlaceholder);
  render(html`<${SearchBox} searchBarElement=${searchBarElement} />`, searchBoxPlaceholder);
}

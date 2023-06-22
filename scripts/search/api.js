import { performCatalogServiceQuery, searchRecommendationsQuery } from '../commerce.js';
import { fetchIndex } from '../scripts.js';

function findMatches(index, query) {
  return index.data
    .filter((item) => item.template === 'plp')
    .filter((item) => item.title.toLowerCase()
      .includes(query.toLowerCase()))
    .slice(0, 10);
}

export default async function getRelatedItems(query) {
  if (!query) {
    return null;
  }

  if (query.length < 2) {
    return null;
  }

  const searchResultsPromise = performCatalogServiceQuery(
    searchRecommendationsQuery,
    { search: query },
  );
  const indexResultsPromise = fetchIndex('query-index');

  const [searchResults, indexResults] = await Promise
    .all([searchResultsPromise, indexResultsPromise]);

  return {
    topResults: searchResults.productSearch.items.map((item) => {
      const itemPath = new URL(item.productView.url).pathname;
      const urlKey = itemPath.substring(1, itemPath.length - 5);

      return ({
        productView: {
          ...item.productView,
          url_key: urlKey,
        },
      });
    }),
    categories: findMatches(indexResults, query),
    recommendedTerms: searchResults.productSearch.suggestions,
  };
}

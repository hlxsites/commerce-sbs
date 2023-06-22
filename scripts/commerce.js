/* eslint-disable import/prefer-default-export */

import { getConfigValue } from './configs.js';
import { readBlockConfig } from './lib-franklin.js';

// eslint-disable-next-line import/no-cycle
import { fetchIndex } from './scripts.js';

const preloadedImages = new Set();
export const PLACEHOLDER_IMG = new URL('/product-images/placeholder.jpg', document.baseURI).toString();

/* Common query fragments */

const priceFieldsFragment = `fragment priceFields on ProductViewPrice {
  regular {
      amount {
          currency
          value
      }
  }
  final {
      amount {
          currency
          value
      }
  }
}`;

const productAmastyLabelsQuery = `query AmastyLabels($productIds: [Int]!) {
  amLabelProvider(productIds: $productIds, mode: PRODUCT) {
      items {
          product_id
          position
          txt
          style
      }
  }
}`;

/* Queries PDP */

export const refineProductQuery = `query RefineProductQuery($sku: String!, $variantIds: [String!]!) {
  refineProduct(
    sku: $sku,
    optionIds: $variantIds
  ) {
    images(roles: []) {
      url
      roles
      label
    }
    ... on SimpleProductView {
      price {
        final {
          amount {
            currency
            value
          }
        }
        regular {
          amount {
            currency
            value
          }
        }
      }
    }
    addToCartAllowed
  }
}`;

export const productStockQuery = `query StockQuery($urlKey: String!) {
  products(
    filter: { url_key: { eq: $urlKey } }
    pageSize: 20
    currentPage: 1
  ) {
    items {
      id
      name
      stock_status
      ... on ConfigurableProduct {
        variants {
          attributes {
            uid
            label
            code
          }

          product {
            sku
            name
            stock_status
          }
        }
      }
    }
  }
}`;

export const productDetailQuery = `query ProductQuery($sku: String!) {
  products(skus:[$sku]) {
    __typename
    id
    sku
    name
    description
    shortDescription
    url
    images(roles: []) {
      url
      label
      roles
    }
    attributes(roles: []) {
      name
      label
      value
      roles
    }
  ... on SimpleProductView {
      price {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
      }
    }
  ... on ComplexProductView {
      options {
        id
        title
        required
        values {
          id
          title
  
        }
      }
      priceRange {
        maximum {
          ...priceFields
        }
        minimum {
          ...priceFields
        }
      }
    }
  }
}
${priceFieldsFragment}`;

export const productBreadcrumbQuery = `query ProductBreadcrumbQuery($urlKey: String!) {
    products(
        filter: { url_key: { eq: $urlKey } }
        pageSize: 20
        currentPage: 1
    ) {
        items {
            name
            categories {
                name
                url_key
                url_path
                breadcrumbs {
                    category_name
                    category_url_key
                    category_url_path
                }
            }
        }
    }
}`;

export const urlKeyToSkuQuery = `query UrlKeyToSku($urlKeys: [String!]!) {
    products(
        filter: { url_key: { in: $urlKeys } }
        pageSize: 200
        currentPage: 1
    ) {
        items {
            url_key
            sku
        }
    }
}`;

/* Queries PLP */

export const productSearchQuery = `query ProductSearch(
  $currentPage: Int = 1
  $pageSize: Int = 20
  $phrase: String = ""
  $sort: [ProductSearchSortInput!] = []
  $filter: [SearchClauseInput!] = []
) {
  productSearch(
      current_page: $currentPage
      page_size: $pageSize
      phrase: $phrase
      sort: $sort
      filter: $filter
  ) {
      facets {
          title
          type
          attribute
          buckets {
              title
              __typename
              ... on RangeBucket {
                  count
                  from
                  to
              }
              ... on ScalarBucket {
                  count
                  id
              }
              ... on StatsBucket {
                  max
                  min
              }
          }
      }
      items {
          product {
            id
          }
          productView {
              name
              sku
              url
              ... on SimpleProductView {
                  price {
                      ...priceFields
                  }
              }
              ... on ComplexProductView {
                  priceRange {
                      minimum {
                          ...priceFields
                      }
                      maximum {
                          ...priceFields
                      }
                  }
                  options {
                      id
                      title
                      values {
                        id
                        title
                      }
                  }
              }
          }
      }
      page_info {
          current_page
          total_pages
          page_size
      }
      total_count
  }
}
${priceFieldsFragment}`;

export const productOptionImageQuery = `query ProductOptionImage($sku: String!, $optionIds: [String!]!) {
  refineProduct(
    sku: $sku,
    optionIds: $optionIds
  ) {
    images(roles: ["small_image"]) {
      url
    }
  }
}`;

/* Queries for search recommendations */
export const searchRecommendationsQuery = `
query($search: String!) {
  productSearch(
    phrase: $search,
    page_size: 6,
    sort: [{attribute: "relevance", direction: DESC}],
    filter: [{attribute:"inStock", eq:"true"}]
  ) {
    items {
      productView {
        url
        name
        sku
      }
    }
    suggestions
    related_terms
  }
}
`;

/* Common functionality */

export function getSwatchImageUrl(sku, color) {
  // Remove and non-alphanumeric characters
  const colorString = color.replace(/[^a-zA-Z0-9]/g, '');

  return `https://franklin.maidenform.com/images/swatches/HNS_${sku}/HNS_${sku}_${colorString}_sw.jpg`;
}

export function renderFallbackImage(event, fallback = PLACEHOLDER_IMG) {
  const pictureTag = event.target.parentNode;
  for (let i = 0; i < pictureTag.children.length; i += 1) {
    const child = pictureTag.children[i];
    if (child.tagName === 'SOURCE') {
      child.srcset = fallback;
    } else if (child.tagName === 'IMG') {
      child.src = fallback;
    }
  }
}

export async function getProductRatings(productSkus) {
  const skusString = typeof productSkus === 'object' ? productSkus.join(',') : productSkus;

  const endpoint = await getConfigValue('bazaarvoice-endpoint');
  const api = new URL(`${endpoint}/data/statistics.json`);
  api.searchParams.set('apiversion', '5.4');
  api.searchParams.set('passkey', await getConfigValue('bazaarvoice-passkey'));
  api.searchParams.set('Filter', `ProductId:${skusString}`);
  api.searchParams.set('Stats', 'Reviews');

  const response = await fetch(api);
  if (response.ok) {
    const body = await response.json();
    if (body?.Results?.length === 1) {
      return {
        average: body.Results[0].ProductStatistics.ReviewStatistics?.AverageOverallRating,
        count: body.Results[0].ProductStatistics.ReviewStatistics?.TotalReviewCount,
      };
    }

    return body?.Results?.reduce(
      (obj, product) => ({
        ...obj,
        [product.ProductStatistics.ProductId]: {
          average: product.ProductStatistics.ReviewStatistics?.AverageOverallRating,
          count: product.ProductStatistics.ReviewStatistics?.TotalReviewCount,
        },
      }),
      {},
    );
  }
  return { average: null, count: null };
}

export async function performCatalogServiceQuery(query, variables) {
  const headers = {
    'Content-Type': 'application/json',
    'Magento-Environment-Id': '271c8746-f2ed-43c3-8159-e7b7bbe79aac',
    'Magento-Website-Code': 'maidenform',
    'Magento-Store-View-Code': 'maidenform_store_view',
    'Magento-Store-Code': 'maidenform_store',
    'Magento-Customer-Group': '77de68daecd823babbb58edb1c8e14d7106e83bb',
    'x-api-key': 'maidenform-franklin',
  };

  const apiCall = new URL('https://franklin.maidenform.com/cs-graphql-sandbox');
  apiCall.searchParams.append('query', query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '));
  apiCall.searchParams.append('variables', variables ? JSON.stringify(variables) : null);

  const response = await fetch(apiCall, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    return null;
  }

  const queryResponse = await response.json();

  return queryResponse.data;
}

export async function performMonolithGraphQLQuery(query, variables, GET = true) {
  const headers = {
    'Content-Type': 'application/json',
    Store: 'maidenform_store_view',
  };

  let response;
  if (!GET) {
    response = await fetch('https://franklin.maidenform.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '),
        variables,
      }),
    });
  } else {
    const params = new URLSearchParams({
      query: query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '),
      variables: JSON.stringify(variables),
    });
    response = await fetch(
      `https://franklin.maidenform.com/graphql?${params.toString()}`,
      { headers },
    );
  }

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getAmastyLabels(productIds) {
  const response = await performMonolithGraphQLQuery(productAmastyLabelsQuery, { productIds });
  return response.data?.amLabelProvider
    .map((e) => (e.items.length > 0 ? e.items[0] : null))
    .filter((e) => e !== null);
}

export function renderPrice(product, format, html, Fragment) {
  // Simple product
  if (product.price) {
    const { regular, final } = product.price;
    if (regular.amount.value === final.amount.value) {
      return html`<span class="price-final">${format(final.amount.value)}</span>`;
    }
    return html`<${Fragment}>
      <span class="price-regular">${format(regular.amount.value)}</span> <span class="price-final">${format(final.amount.value)}</span>
    </${Fragment}>`;
  }

  // Complex product
  if (product.priceRange) {
    const { regular: regularMin, final: finalMin } = product.priceRange.minimum;
    const { final: finalMax } = product.priceRange.maximum;

    if (finalMin.amount.value !== finalMax.amount.value) {
      return html`<span class="price-from">from ${format(finalMin.amount.value)}</span>`;
    }

    if (finalMin.amount.value !== regularMin.amount.value) {
      return html`<${Fragment}>
      <span class="price-regular">${format(regularMin.amount.value)}</span> <span class="price-final">${format(finalMin.amount.value)}</span>
    </${Fragment}>`;
    }

    return html`<span class="price-final">${format(finalMin.amount.value)}</span>`;
  }

  return null;
}

export async function getMagentoStorefrontEvents(callback) {
  return new Promise((resolve) => {
    if (window.magentoStorefrontEvents) {
      if (callback) {
        callback(window.magentoStorefrontEvents);
      }
      resolve(window.magentoStorefrontEvents);
      return;
    }

    const eventHandler = ({ data }) => {
      if (data === 'magento-storefront-events-sdk') {
        window.removeEventListener('message', eventHandler);
        if (callback) {
          callback(window.magentoStorefrontEvents);
        }
        resolve(window.magentoStorefrontEvents);
      }
    };
    window.addEventListener('message', eventHandler);
  });
}

let initMagentoStorefrontEventsPromise;
export async function initMagentoStorefrontEvents() {
  if (initMagentoStorefrontEventsPromise) {
    return initMagentoStorefrontEventsPromise;
  }

  // eslint-disable-next-line no-async-promise-executor
  initMagentoStorefrontEventsPromise = new Promise(async (resolve) => {
    await import('./commerce-events-sdk.js');

    getMagentoStorefrontEvents((mse) => {
      let pageType = 'PageBuilder';
      if (window.location.pathname === '/') {
        pageType = 'CMS';
      } else if (window.location.pathname.includes('/products/')) {
        pageType = 'Product';
      } else if (document.body.classList.contains('plp')) {
        pageType = 'Category';
      } else if (window.location.pathname.includes('/checkout/cart')) {
        pageType = 'Cart';
      } else if (window.location.pathname.includes('/checkout')) {
        pageType = 'Checkout';
      }

      mse.context.setPage({
        pageType,
        maxXOffset: window.innerWidth,
        maxYOffset: window.innerHeight,
        minXOffset: 0,
        minYOffset: 0,
        ping_interval: 0,
        pings: 0,
      });
      mse.publish.pageView();
    });
    resolve();
  });
  return initMagentoStorefrontEventsPromise;
}

/* PDP specific functionality */

export function getSkuFromUrl() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/[\w|-]+\/([\w|-]+)$/);
  return result?.[1];
}

export function getUrlKeyFromUrl() {
  const path = window.location.pathname;
  const result = path.match(/\/products\/([\w|-]+)\/[\w|-]+$/);
  return result?.[1];
}

async function preloadImage(src) {
  const img = new Image();
  const promise = new Promise((resolve) => {
    img.onload = resolve;
  });
  const preloadWith = window.matchMedia('(max-width: 450px)').matches ? '450' : '700';
  img.src = `${src}?width=${preloadWith}&format=webply&optimize=medium`;
  preloadedImages.add(img);
  return promise;
}

export async function preloadLCPImage() {
  return preloadImage(`${window.origin}/product-images/${getSkuFromUrl().toLowerCase()}.jpg`);
}

const productsCache = {};
export async function getProduct(sku) {
  if (productsCache[sku]) {
    return productsCache[sku];
  }
  const rawProductPromise = performCatalogServiceQuery(productDetailQuery, { sku });

  const productPromise = rawProductPromise.then((productData) => {
    if (!productData?.products?.[0]) {
      return null;
    }

    const product = productData?.products?.[0];

    product.productImages = [{ url: `${window.origin}/product-images/${getSkuFromUrl().toLowerCase()}.jpg` }];

    return product;
  });

  productsCache[sku] = productPromise;
  return productPromise;
}

export async function getCategoryNameFromUrlKey() {
  const { data: possibleProducts } = await performMonolithGraphQLQuery(
    productBreadcrumbQuery,
    { urlKey: getUrlKeyFromUrl() },
  );
  const product = possibleProducts?.products?.items?.[0];

  if (!product) {
    return null;
  }

  const clearanceFilter = document.referrer.toLowerCase().includes('clearance')
    ? (category) => category.name.toLowerCase().includes('clearance')
    : (category) => !category.name.toLowerCase().includes('clearance');

  // find the category that matches a PLP
  const plpIndex = (await fetchIndex('query-index')).data;

  const possiblePLPs = product.categories?.filter(
    (category) => plpIndex.find((plp) => plp.path === `/${category.url_key}`),
  ).filter(clearanceFilter);

  return possiblePLPs[0] ?? product.categories[0];
}

export function isPDP() {
  return window.location.href.match(/\/products\/[\w|-]+\/[\w|-]+/) !== null;
}

/* PLP specific functionality */

// You can get this list via attributeMetadata query
export const ALLOWED_FILTER_PARAMETERS = ['page', 'pageSize', 'sort', 'sortDirection', 'q', 'panty_style', 'control_level', 'sleep_loungewear_type', 'silhouette', 'bra_type', 'price', 'shapewear_style', 'size', 'color_family', 'cupsize', 'bandsize', 'strap_type', 'game', 'hook_location'];

const getColorSwatchesForProduct = (colorOption, sku) => (
  colorOption ? colorOption.values : [])
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((v) => ({
    ...v,
    image: getSwatchImageUrl(sku, v.title),
  }))
  // Remove options without image
  .filter((v) => v.image);

const mapProduct = (productView, product) => {
  // Parse url_key from url
  const productUrl = new URL(productView.url);
  const urlKey = productUrl.pathname.substring(1, productUrl.pathname.length - 5);

  // Find in product.options the object with id = color
  const colorOption = productView.options.find((option) => option.id === 'color');
  const colorOptions = getColorSwatchesForProduct(colorOption, productView.sku);

  return {
    ...product,
    ...productView,
    images: [{ url: new URL(`/product-images/${productView.sku.toLowerCase()}.jpg`, document.baseURI).toString() }],
    url_key: urlKey,
    swatches: colorOptions,
    rating: 'loading',
  };
};

export async function loadCategory(state) {
  try {
    // TODO: Be careful if query exceeds GET size limits, then switch to POST
    const variables = {
      pageSize: state.currentPageSize,
      currentPage: state.currentPage,
      sort: [{
        attribute: state.sort,
        direction: state.sortDirection === 'desc' ? 'DESC' : 'ASC',
      }],
    };

    if (state.type === 'search') {
      variables.phrase = state.searchTerm;
    }

    if (Object.keys(state.filters).length > 0) {
      variables.filter = [];
      Object.keys(state.filters).forEach((key) => {
        if (key === 'price') {
          const [from, to] = state.filters[key];
          if (from && to) {
            variables.filter.push({ attribute: key, range: { from, to } });
          }
        } else if (state.filters[key].length > 1) {
          variables.filter.push({ attribute: key, in: state.filters[key] });
        } else if (state.filters[key].length === 1) {
          variables.filter.push({ attribute: key, eq: state.filters[key][0] });
        }
      });
    }

    if (state.type === 'category' && state.category.id) {
      variables.filter = variables.filter || [];
      variables.filter.push({ attribute: 'categoryIds', eq: state.category.id });
    }

    const response = await performCatalogServiceQuery(productSearchQuery, variables);

    // TODO: Ignore errors for now, since some are caused by products with
    // missing price information

    // Parse response into state
    return {
      pages: Math.max(response.productSearch.page_info.total_pages, 1),
      products: {
        items: response.productSearch.items
          .map((product) => mapProduct(product.productView, product.product)),
        total: response.productSearch.total_count,
      },
      facets: response.productSearch.facets.filter((facet) => facet.attribute !== 'categories'),
    };
  } catch (e) {
    console.error('Error loading products', e);
    return {
      pages: 1,
      products: {
        items: [],
        total: 0,
      },
      facets: [],
    };
  }
}

export function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const newState = {
    filters: {
      inStock: ['true'],
    },
  };
  params.forEach((value, key) => {
    if (!ALLOWED_FILTER_PARAMETERS.includes(key)) {
      return;
    }

    if (key === 'page') {
      newState.currentPage = parseInt(value, 10) || 1;
    } else if (key === 'pageSize') {
      newState.currentPageSize = parseInt(value, 10) || 10;
    } else if (key === 'sort') {
      newState.sort = value;
    } else if (key === 'sortDirection') {
      newState.sortDirection = value === 'desc' ? 'desc' : 'asc';
    } else if (key === 'q') {
      newState.searchTerm = value;
    } else if (key === 'price') {
      newState.filters[key] = value.split(',').map((v) => parseInt(v, 10) || 0);
    } else {
      newState.filters[key] = value.split(',');
    }
  });
  return newState;
}

export async function preloadCategory() {
  const plpBlock = document.querySelector('.product-list-page');
  const { category } = readBlockConfig(plpBlock);
  const queryParams = parseQueryParams();

  const isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;
  const defaultPageSize = isMobile ? 10 : 12;

  window.loadCategoryPromise = loadCategory({
    pages: 1,
    currentPage: 1,
    category: {
      id: category,
    },
    currentPageSize: defaultPageSize,
    type: 'category',
    sort: 'position',
    sortDirection: 'asc',
    ...queryParams,
  });
}

export function wrapWithSup(stringToWrap, findThis, replaceWithThis = '&reg;') {
  return stringToWrap.replace(new RegExp(`${findThis}`, 'gi'), `<sup>${replaceWithThis}</sup>`);
}

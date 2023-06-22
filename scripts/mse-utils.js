import { getMagentoStorefrontEvents, performMonolithGraphQLQuery } from './commerce.js';

const STOREFRONT_QUERY_RESULT_KEY = 'storefront-query-result';

const STOREFRONT_CONTEXT_QUERY = `
   query DataServicesStorefrontInstanceContext {
        dataServicesStorefrontInstanceContext {
            catalog_extension_version
            environment
            environment_id
            store_code
            store_id
            store_name
            store_url
            store_view_code
            store_view_id
            store_view_name
            website_code
            website_id
            website_name
        }
        storeConfig {
            base_currency_code
            store_code
        }
    }
`;

let eventsSDKInitialized = false;
export default async function initializeMSEWithStorefrontInstance() {
  if (!eventsSDKInitialized) {
    eventsSDKInitialized = true;
    let result;
    if (window.localStorage.getItem(STOREFRONT_QUERY_RESULT_KEY)) {
      result = JSON.parse(window.localStorage.getItem(STOREFRONT_QUERY_RESULT_KEY));
    } else {
      ({ data: result } = await performMonolithGraphQLQuery(STOREFRONT_CONTEXT_QUERY, {}));
      window.localStorage.setItem(STOREFRONT_QUERY_RESULT_KEY, JSON.stringify(result));
    }

    if (!result) {
      throw new Error('error fetching storefront context');
    }

    const {
      environment,
      environment_id: environmentId,
      website_id: websiteId,
      website_code: websiteCode,
      website_name: websiteName,
      store_url: storeUrl,
      store_id: storeId,
      store_code: storeCode,
      store_name: storeName,
      store_view_id: storeViewId,
      store_view_code: storeViewCode,
      store_view_name: storeViewName,
      catalog_extension_version: catalogExtensionVersion,
    } = result.dataServicesStorefrontInstanceContext;
    const { base_currency_code: baseCurrencyCode } = result.storeConfig;

    const context = {
      environmentId,
      environment,
      storeUrl,
      websiteId,
      websiteCode,
      storeId,
      storeCode,
      storeViewId,
      storeViewCode,
      websiteName,
      storeName,
      storeViewName,
      baseCurrencyCode,
      storeViewCurrencyCode: baseCurrencyCode,
      catalogExtensionVersion,
    };

    getMagentoStorefrontEvents((mse) => {
      mse.context.setStorefrontInstance(context);
    });
  }
}

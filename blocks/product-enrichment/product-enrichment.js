import { fetchIndex, loadFragment } from '../../scripts/scripts.js';

export default async function decorate(block) {
  await fetchIndex('fragments/enrichment-fragments');

  const index = window.index['fragments/enrichment-fragments'];
  const product = window.location.pathname.match(/\/products\/([^/]+)/)?.[1];

  if (!product) {
    return;
  }

  const enrichmentPromises = index.data.map(async (enrichment) => {
    const products = JSON.parse(enrichment.products);

    if (products && Array.isArray(products) && products.includes(product)) {
      return loadFragment(enrichment.path);
    }
    return null;
  });

  const enrichments = (await Promise.all(enrichmentPromises)).filter((item) => item != null);

  enrichments.forEach((enrichment) => {
    if (enrichment) {
      const section = enrichment.querySelector(':scope .section');
      if (section) {
        block.closest('.section').classList.add(...section.classList);
        block.closest('.section').append(...section.childNodes);
      }
    }
  });

  block.closest('.product-enrichment-wrapper').remove();
}

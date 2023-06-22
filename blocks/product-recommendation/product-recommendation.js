import { loadScript } from '../../scripts/scripts.js';
import { readBlockConfig } from '../../scripts/lib-franklin.js';
import { getMagentoStorefrontEvents, initMagentoStorefrontEvents, renderFallbackImage } from '../../scripts/commerce.js';

function renderPlaceholder(block) {
  block.innerHTML = `<div class="product-grid">
    ${[...Array(5)].map(() => `
        <div class="placeholder">
            <picture><img src="" /></picture>
        </div>
    `).join('')}
  </div>`;
}

function renderItem(product) {
  const container = document.createElement('div');
  container.className = 'product-grid-item';

  container.innerHTML = `<a href="${product.url}/${product.sku}">
    <picture>
      <source type="image/webp" srcset="${product.image}?width=220&format=webply&optimize=medium">
      <img loading="lazy" alt="${product.name}" src="${product.image}?width=220&format=jpg&optimize=medium">
    </picture>
    <span>${product.name}</span>
  </a>`;
  container.querySelector('img').addEventListener('error', renderFallbackImage);

  return container;
}

function renderItems(block, products) {
  const grid = block.querySelector('.product-grid');

  grid.innerHTML = '';

  products.forEach((product) => {
    grid.appendChild(renderItem(product));
  });
}

// TODO once image queries are final, update this code
function getImages(recommendedProducts) {
  return recommendedProducts.map((product) => ({
    ...product,
    image: `/product-images/${product.sku.toLowerCase()}.jpg`,
  }));
}

async function loadRecommendations(block, config) {
  await initMagentoStorefrontEvents();
  const { default: initializeMSEWithStorefrontInstance } = await import('../../scripts/mse-utils.js');
  await initializeMSEWithStorefrontInstance();

  // load recommendations sdk
  await new Promise((resolve) => {
    loadScript('/scripts/magento-recommendations-sdk.js', {}, async () => {
      resolve();
    });
  });

  const preconfigured = config.preconfigured === 'true';

  const pageType = (await getMagentoStorefrontEvents()).context.getPage()?.pageType ?? 'PageBuilder';

  const client = new window.RecommendationsClient({ pageType });
  if (!preconfigured && config.type) {
    client.register({
      name: config.type,
      type: config.type,
      // Workaround, since outOfStock does not work for registered recommendations
      filter: 'prices.minimum.regular: >=1',
    });
  }
  getMagentoStorefrontEvents((mse) => mse.publish.recsRequestSent());
  const { status, data } = preconfigured ? await client.fetchPreconfigured() : await client.fetch();

  let products;
  if (preconfigured && config.name) {
    products = data?.results?.find((a) => a.unitName === config.name)?.products;
  } else if (preconfigured) {
    products = data?.results?.[0]?.products;
  } else {
    products = data?.units?.[0]?.products;
  }

  if (status === 200 && products && products.length > 0) {
    const productsWithImages = getImages(products);
    renderItems(block, productsWithImages);
  } else {
    block.innerHTML = '';
  }

  if (status === 200 && products && products.length > 5) {
    const arrows = document.createElement('div');
    arrows.innerHTML = '<div class="scroll-controls">'
      + '<button class="prev previous-item-button"><span class="sr-only">Previous</span></button>'
      + '<button class="next next-item-button"><span class="sr-only">Next</span></button>'
      + '</div>';
    block.appendChild(arrows);
  }

  const productGrid = document.querySelectorAll('.product-recommendation.preconfigured .product-grid');
  const previousButtons = document.querySelectorAll('.product-recommendation.preconfigured .prev');
  const nextButtons = document.querySelectorAll('.product-recommendation.preconfigured .next');
  previousButtons.forEach((previousButton, index) => {
    const container = productGrid[index];

    previousButton.addEventListener('click', () => {
      // Get the current scroll position and the width of the container
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;

      // Find the previous scroll position based on the current position and container width
      const previousPosition = Math.max(0, scrollPosition - containerWidth);

      // Scroll to the previous position with a smooth animation
      container.scrollTo({
        left: previousPosition,
        behavior: 'smooth',
      });
    });
  });

  nextButtons.forEach((nextButton, index) => {
    const container = productGrid[index];

    nextButton.addEventListener('click', () => {
      // Get the current scroll position and the width of the container
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;

      // Find the next scroll position based on the current position and container width
      const nextPosition = Math.min(
        container.scrollWidth - containerWidth,
        scrollPosition + containerWidth,
      );

      // Scroll to the next position with a smooth animation
      container.scrollTo({
        left: nextPosition,
        behavior: 'smooth',
      });
    });
  });
}

export default async function decorate(block) {
  const config = readBlockConfig(block);
  renderPlaceholder(block);

  const inViewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadRecommendations(block, config);
        inViewObserver.disconnect();
      }
    });
  });
  inViewObserver.observe(block);

  const observer = new MutationObserver(() => {
    block.querySelectorAll('a').forEach((link) => {
      try {
        const url = new URL(link);
        link.href = `/products${url.pathname.replace('.html', '')}`;
        // eslint-disable-next-line no-empty
      } catch { }
    });
  });
  observer.observe(block, { subtree: true, childList: true });
}

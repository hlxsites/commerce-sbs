import loadBazaarVoice from '../../scripts/bazaarvoice.js';
import { getSkuFromUrl } from '../../scripts/commerce.js';

export default function decorate(block) {
  const productId = getSkuFromUrl();

  block.innerHTML = `
    <div aria-label="View Reviews or Questions" role="tablist">
        <button role="tab" aria-selected="true">Reviews</button>
        <button role="tab" aria-selected="false">Questions</button>
    </div>
    <div id="product-reviews" role="tabpanel">
        <div data-bv-show="review_highlights" data-bv-product-id="${productId}"></div>
        <div data-bv-show="reviews" data-bv-product-id="${productId}"></div>
    </div>
    <div role="tabpanel" hidden>
        <div data-bv-show="questions" data-bv-product-id="${productId}"></div>
    </div>
  `;

  // Handle tab toggle
  block.querySelectorAll('button[role="tab"]').forEach((tabButton, index) => {
    tabButton.addEventListener('click', () => {
      block.querySelectorAll('button[role="tab"]')
        .forEach((button) => button.setAttribute('aria-selected', 'false'));
      tabButton.setAttribute('aria-selected', 'true');
      const tabs = [...block.querySelectorAll('div[role="tabpanel"]')];
      tabs.forEach((tab) => tab.setAttribute('hidden', ''));
      tabs[index].removeAttribute('hidden');
    });
  });

  // Load bazaarvoice library when block in view
  const inViewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadBazaarVoice();
        inViewObserver.disconnect();
      }
    });
  });
  inViewObserver.observe(block);
}

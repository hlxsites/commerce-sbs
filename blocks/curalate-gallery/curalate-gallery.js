import { loadCrl8 } from '../../scripts/bazaarvoice.js';

export default async function decorate(block) {
  const container = block.firstElementChild;
  const crl8Id = container.textContent.trim();
  container.setAttribute('data-crl8-container-id', crl8Id);
  block.firstElementChild.innerHTML = '';

  if ('IntersectionObserver' in window) {
    // eslint-disable-next-line vars-on-top
    const lazyCrl8Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadCrl8();
          lazyCrl8Observer.unobserve(entry.target);
        }
      });
    });
    lazyCrl8Observer.observe(container);
  }
}

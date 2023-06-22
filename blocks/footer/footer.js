import { loadFragment } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const fragment = await loadFragment('/footer');
  const footer = block.closest('.footer-wrapper');

  if (fragment) {
    const fragmentSections = fragment.querySelectorAll(':scope .section');
    if (fragmentSections) {
      footer.replaceChildren(...fragmentSections);
    }
  }

  // Add back to top button
  const backToTop = document.createRange().createContextualFragment(`
  <div class="back-to-top">
    <button aria-label="Back To Top"></button>
  </div>
  `);

  // Scroll back to top
  backToTop.querySelector('button').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  footer.prepend(backToTop);
}

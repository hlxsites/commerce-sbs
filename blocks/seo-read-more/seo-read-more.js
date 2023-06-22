export default async function decorate(block) {
  // Add more/less button
  const button = document.createElement('button');
  button.innerHTML = 'Read More +';
  button.ariaExpanded = false;
  button.setAttribute('aria-controls', 'more-content');
  block.appendChild(button);

  const moreContent = block.querySelector('.seo-read-more.block>div+div');
  moreContent.setAttribute('aria-expanded', false);
  moreContent.setAttribute('id', 'more-content');
  moreContent.setAttribute('role', 'region');

  button.addEventListener('click', () => {
    moreContent.classList.toggle('visible');
    if (moreContent.classList.contains('visible')) {
      button.textContent = 'Show less -';
      moreContent.setAttribute('aria-expanded', true);
    } else {
      button.textContent = 'Read More +';
      moreContent.setAttribute('aria-expanded', false);
    }
  });
}

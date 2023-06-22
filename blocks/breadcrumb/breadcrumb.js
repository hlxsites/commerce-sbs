import {
  getCategoryNameFromUrlKey, isPDP, wrapWithSup,
} from '../../scripts/commerce.js';
import { getMetadata } from '../../scripts/lib-franklin.js';
import { fetchIndex } from '../../scripts/scripts.js';

function prependSlash(path) {
  return path.startsWith('/') ? path : `/${path}`;
}

function renderBreadcrumb(breadcrumbs, list) {
  const li = document.createElement('li');

  // If there is no link, style as bold text
  li.innerHTML = (breadcrumbs.category_url_path || breadcrumbs.url_path) ? `
    <a href="${prependSlash(breadcrumbs.category_url_path ?? breadcrumbs.url_path)}">
        ${breadcrumbs.category_name ?? breadcrumbs.name}
    </a>
  ` : `<strong>${breadcrumbs.category_name ?? breadcrumbs.name}</strong>`;
  list.append(li);
}

async function createPDPBreadcrumb(block) {
  const category = await getCategoryNameFromUrlKey();

  if (category) {
    const list = block.querySelector('ul');
    const lastCrumb = wrapWithSup(document.title, '®|&reg;');
    list.innerHTML = '';

    [
      // Home Link
      { url_path: '/', name: 'Home' },
      // Links to parent categories
      ...(category.breadcrumbs ?? []),
      // Link to current category
      category,
      // Current page
      { name: lastCrumb },
    ].forEach((breadcrumb) => {
      renderBreadcrumb(breadcrumb, list);
    });
  }

  block.classList.add('breadcrumb-pdp');
}

async function createAutoBreadcrumb(block) {
  const pageIndex = (await fetchIndex('query-index')).data;

  const urlForIndex = (index) => prependSlash(window.location.pathname.split('/').slice(1, index + 2).join('/'));

  const ul = block.querySelector('ul');
  const breadcrumbs = [
    // Home link
    {
      name: 'Home',
      url_path: '/',
    },
    // Sub-page links
    ...window.location.pathname.split('/').slice(1, -1).map((part, index) => ({
      name: pageIndex.find((page) => page.path === urlForIndex(index))?.title ?? part,
      url_path: urlForIndex(index),
    })),
    // Current page
    { name: document.title },
  ];
  breadcrumbs.forEach((crumb) => {
    renderBreadcrumb(crumb, ul);
  });
}

export default async function decorate(block) {
  if (isPDP()) {
    await createPDPBreadcrumb(block);
  } else if (getMetadata('breadcrumb') === 'auto') {
    await createAutoBreadcrumb(block);
  }
}

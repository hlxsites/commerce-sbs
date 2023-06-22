import {
  decorateBlocks,
  decorateIcons,
  decorateSections,
  decorateTemplateAndTheme,
  loadBlocks, buildBlock,
  loadCSS,
  getMetadata,
  readBlockConfig,
  loadFooter,
  loadHeader,
  sampleRUM,
  waitForLCP,
  loadBlock, decorateBlock,
} from './lib-franklin.js';
import { getConfigValue } from './configs.js';
// eslint-disable-next-line import/no-cycle
import { preloadLCPImage, preloadCategory, isPDP } from './commerce.js';

const LCP_BLOCKS = [
  'product-details',
  'product-list-page',
]; // add your LCP blocks to the list
window.hlx.RUM_GENERATION = 'project-1'; // add your RUM generation information here

/* function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
} */
/**
 * decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */

function decorateButtons(element) {
  element.querySelectorAll('a')
    .forEach((a) => {
      a.title = a.title || a.textContent;
      if (a.href !== a.textContent) {
        const up = a.parentElement;
        const twoup = a.parentElement.parentElement;
        if (!a.querySelector('img')) {
          if (up.childNodes.length === 1 && up.tagName === 'STRONG'
            && twoup.childNodes.length === 1 && twoup.tagName === 'P') {
            a.className = 'button primary';
            twoup.classList.add('button-container');
          }
          if (up.childNodes.length === 1 && up.tagName === 'EM'
            && twoup.childNodes.length === 1 && twoup.tagName === 'P') {
            a.className = 'button secondary';
            twoup.classList.add('button-container');
          }
        }
      }
    });
}

function buildImageLinks(element) {
  const pictures = element.querySelectorAll(':scope > div > p > picture');
  pictures.forEach((picture) => {
    const up = picture.parentElement;
    if (up) {
      // select the last image that is associated with the link
      const lastPicture = up.lastElementChild;
      if (lastPicture && (picture === lastPicture)) {
        // get the p tag that has link
        const p = lastPicture.parentElement.nextElementSibling;
        if (p && p.childNodes.length === 1 && p.childNodes[0].nodeName === 'A') {
          const link = p.childNodes[0];
          link.innerHTML = lastPicture.outerHTML;
          up.replaceChild(link, lastPicture);
          p.remove();
        }
      }
    }
  });
}

let MANUAL_BREADCRUMB;
function buildBreadcrumb(main) {
  if (getMetadata('breadcrumb') === 'none') {
    return;
  }

  if (getMetadata('breadcrumb') === 'auto') {
    main.classList.add('with-breadcrumb');
  } else if (document.querySelector('.breadcrumb')) {
    MANUAL_BREADCRUMB = document.querySelector('.breadcrumb');
    main.classList.add('with-breadcrumb');
  }
}

export function loadScript(url, attrs, callback) {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  if (attrs) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const attr in attrs) {
      script.setAttribute(attr, attrs[attr]);
    }
  }
  head.append(script);
  return script;
}

/*
Returns an array of objects with the following structure:
[
  { "key": 5, "count": 175 },
  { "key": 4, "count": 27 },
  { "key": 3, "count": 20 },
  { "key": 2, "count": 27 },
  { "key": 1, "count": 38 }
]
*/
export async function getProductRatingsSummary(productId) {
  const searchParams = new URLSearchParams({
    passkey: await getConfigValue('bazaarvoice-passkey'),
    productid: productId,
    contentType: 'reviews,questions',
    reviewDistribution: 'primaryRating,recommended',
    rev: 0,
    contentlocale: 'en_GB,en_US',
  });
  const endpoint = await getConfigValue('bazaarvoice-endpoint');
  const api = new URL(`${endpoint}/data/display/0.2alpha/product/summary`);
  const response = await fetch(`${api}?${searchParams.toString()}`);
  if (response.ok) {
    const body = await response.json();
    return body?.reviewSummary?.primaryRating?.distribution;
  }
  return [];
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildBreadcrumb(main);
    buildImageLinks(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Creates a section as a placeholder for the promo banner to reduce CLS.
 * @param {Element} main The container element
 */
function buildPromoBannerSection(main) {
  if (getMetadata('banner') !== 'auto') {
    return;
  }

  const section = document.createElement('div');
  section.classList.add('section', 'promo-banner', 'content-hidden');
  main.prepend(section);
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  buildPromoBannerSection(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {HTMLElement} The root element of the fragment
 */
export async function loadFragment(path) {
  if (path && path.startsWith('/')) {
    const resp = await fetch(`${path}.plain.html`);
    if (resp.ok) {
      const main = document.createElement('main');
      main.innerHTML = await resp.text();
      decorateMain(main);
      await loadBlocks(main);
      return main;
    }
  }
  return null;
}

/**
 * loads everything needed to get to LCP.
 */
async function loadEager(doc) {
  if (isPDP()) {
    preloadLCPImage();
  }
  if (getMetadata('template') === 'plp') {
    const plpBlock = document.querySelector('.product-list-page');
    const { category } = readBlockConfig(plpBlock);
    if (category) {
      preloadCategory();
    }
  }
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    await waitForLCP(LCP_BLOCKS);
  }
}

/**
 * Adds the favicon.
 * @param {string} href The favicon URL
 */
export function addFavIcon(href) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = href;
  const existingLink = document.querySelector('head link[rel="icon"]');
  if (existingLink) {
    existingLink.parentElement.replaceChild(link, existingLink);
  } else {
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

async function loadBreadcrumb(main) {
  let wrapper;
  if (MANUAL_BREADCRUMB) {
    wrapper = MANUAL_BREADCRUMB.parentElement;
  } else if (getMetadata('breadcrumb') === 'auto') {
    wrapper = document.createElement('div');
    const block = buildBlock('breadcrumb', { elems: [document.createElement('ul')] });
    wrapper.append(block);
  } else {
    return;
  }
  main.prepend(wrapper);

  decorateBlock(wrapper.firstElementChild);
  await loadBlock(wrapper.firstElementChild);
}

async function loadPromoBanner() {
  const section = document.querySelector('.section.promo-banner');
  if (!section) {
    return;
  }

  // Create metadata
  const value = document.createElement('div');
  value.innerText = 'promo';

  // Create block
  const block = buildBlock('banner', { elems: ['Type'] });
  block.children[0].appendChild(value);

  // Add wrapper div
  const wrapper = document.createElement('div');
  wrapper.appendChild(block);

  // Add to DOM
  section.appendChild(wrapper);

  decorateBlock(wrapper.firstElementChild);
  await loadBlock(wrapper.firstElementChild);
  section.classList.remove('content-hidden');
}

/**
 * loads everything that doesn't need to be delayed.
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main);

  const { hash } = window.location;
  const element = hash ? main.querySelector(hash) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));
  loadBreadcrumb(main);
  loadPromoBanner();

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  addFavIcon(`${window.hlx.codeBasePath}/icons/favicon.ico`);
  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * loads everything that happens a lot later, without impacting
 * the user experience.
 */
function loadDelayed() {
  if (new URLSearchParams(window.location.search).get('skip_delayed') !== 'true') {
    // eslint-disable-next-line import/no-cycle
    window.setTimeout(() => import('./delayed.js'), 3000);
    // load anything that can be postponed to the latest here
  }
}

export async function fetchIndex(indexFile, pageSize = 500) {
  const handleIndex = async (offset) => {
    const resp = await fetch(`/${indexFile}.json?limit=${pageSize}&offset=${offset}`);
    const json = await resp.json();

    const newIndex = {
      complete: (json.limit + json.offset) === json.total,
      offset: json.offset + pageSize,
      promise: null,
      data: [...window.index[indexFile].data, ...json.data],
    };

    return newIndex;
  };

  window.index = window.index || {};
  window.index[indexFile] = window.index[indexFile] || {
    data: [],
    offset: 0,
    complete: false,
    promise: null,
  };

  // Return index if already loaded
  if (window.index[indexFile].complete) {
    return window.index[indexFile];
  }

  // Return promise if index is currently loading
  if (window.index[indexFile].promise) {
    return window.index[indexFile].promise;
  }

  window.index[indexFile].promise = handleIndex(window.index[indexFile].offset);
  const newIndex = await (window.index[indexFile].promise);
  window.index[indexFile] = newIndex;

  return newIndex;
}

/**
 * Parses file url from a GitHub repo into file metadata.
 * @return {object} The metadata describing GitHub file
 */
export function getGithubFileMetadata(fileURL) {
  try {
    const url = new URL(fileURL);
    const urlHalves = url.pathname.replaceAll('//', '/')
      .split('/blob/');
    const repoPathSplit = urlHalves[0].split('/');
    const owner = repoPathSplit[1];
    const repo = repoPathSplit[2];
    const path = urlHalves[1];
    const rawFileURL = `https://raw.githubusercontent.com/${owner}/${repo}/${path}`;

    return {
      owner,
      repo,
      path,
      rawFileURL,
    };
  } catch (e) {
    return null;
  }
}

/**
 * Fetches file contents from a remote file, preserving text-based mime types.
 * @param {string} rawFileURL relative or absolute URL to the file
 */
async function getTextFileFromURL(rawFileURL) {
  const s = await fetch(
    rawFileURL,
  )
    .then((d) => {
      if (d.ok) {
        return d.text();
      }
      throw new Error(`code=${d.status} message=${d.statusText}`);
    });
  return s;
}

/**
 * Retrieves HTML fragment from q file, wherever it's publicly hosted - including GitHub repo.
 * @param {string} fileURL URL to the file - absolute or relative
 * @return {HTMLElement} The fragment
 */
export async function getFragmentFromFile(fileURL) {
  let rawFileURL = fileURL;

  try {
    const u = new URL(fileURL);
    if (u.hostname === 'github.com') {
      const metadata = getGithubFileMetadata(fileURL);
      rawFileURL = metadata.rawFileURL;
    }
    // eslint-disable-next-line no-empty
  } catch (e) {
  }

  const elem = document.createElement('div');
  const file = await getTextFileFromURL(rawFileURL);
  const fragmentDoc = new DOMParser().parseFromString(file, 'text/html');
  const { children } = fragmentDoc;
  for (let i = 0; i < children.length; i += 1) {
    elem.appendChild(children[i]);
  }

  return elem;
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();

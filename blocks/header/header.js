import { decorateIcons } from '../../scripts/lib-franklin.js';
import { cartApi } from '../../scripts/cart/init-cart.js';

let elementsWithEventListener = [];
const mql = window.matchMedia('only screen and (min-width: 1024px)');

function addDropdownIcon(element) {
  const dropdownButton = document.createElement('button');
  const dropdownArrow = document.createElement('span');
  dropdownArrow.classList.add('icon', 'icon-dropdown');
  dropdownButton.append(dropdownArrow);
  dropdownButton.classList.add('dropdown-button');
  element.append(dropdownButton);
}

function wrapChildren(element, newType) {
  const wrapper = document.createElement(newType);
  wrapper.innerHTML = element.innerHTML;
  element.innerHTML = '';
  element.append(wrapper);
}

function menuHasNoContent(menu) {
  // check that first 4 columns have content
  return [...menu.children].slice(0, 5)
    .reduce((prev, curr) => prev && (curr.children[0]?.children?.length ?? 0) === 0, true);
}

function collapseAllSubmenus(menu) {
  menu.querySelectorAll('*[aria-expanded="true"]').forEach((el) => el.setAttribute('aria-expanded', 'false'));
}

function clearAllTabIndex() {
  document.querySelectorAll('.nav-menu *[tabindex]').forEach((element) => {
    element.removeAttribute('tabindex');
  });
}

function addEventListenersMobile() {
  clearAllTabIndex();

  const toggleMenu = (item) => {
    const expanded = item.getAttribute('aria-expanded') === 'true';
    collapseAllSubmenus(item.closest('li'));
    item.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  };

  document.querySelectorAll('.menu-expandable, .m-expandable-title').forEach((title) => {
    elementsWithEventListener.push(title);
    title.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu(title);
    });
  });

  document.querySelectorAll('.nav-menu .icon-dropdown').forEach((dropdown) => {
    elementsWithEventListener.push(dropdown);
    dropdown.setAttribute('aria-label', 'Open section');
    dropdown.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu(dropdown.closest('.menu-expandable, .m-expandable-title'));
      }
    });
  });

  elementsWithEventListener.push(document.querySelector('form .search-button'));
  document.querySelector('form .search-button').addEventListener('click', (e) => {
    const form = e.target.closest('form');
    if (!form.hasAttribute('aria-expanded')) {
      e.preventDefault();
      e.stopPropagation();
      form.setAttribute('aria-expanded', 'true');
    }
  });

  elementsWithEventListener.push(document.querySelector('form .close-button'));
  document.querySelector('form .close-button').addEventListener('click', (e) => {
    const form = e.target.closest('form');
    if (form.hasAttribute('aria-expanded')) {
      e.preventDefault();
      e.stopPropagation();
      form.removeAttribute('aria-expanded');
    }
  });

  const minicart = document.querySelector('header .nav-tools button.minicart');
  if (minicart) {
    elementsWithEventListener.push(minicart);
    minicart.onclick = () => cartApi.toggleCart();
    cartApi.cartItemsQuantity.watch((quantity) => {
      minicart.textContent = quantity || '';
    });
  }
}

function addEventListenersDesktop() {
  clearAllTabIndex();

  function expandMenu(element) {
    const expanded = element.getAttribute('aria-expanded') === 'true';
    collapseAllSubmenus(element.closest('ul'));
    element.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  }

  document.querySelectorAll('.menu-expandable').forEach((linkElement) => {
    elementsWithEventListener.push(linkElement);
    linkElement.setAttribute('tabindex', '0');
    linkElement.setAttribute('aria-label', `Expand the submenu for ${linkElement.querySelector('a').innerText}`);

    linkElement.addEventListener('keydown', (e) => {
      if (e.key === ' ' && e.target === linkElement) {
        e.preventDefault();
        e.stopPropagation();
        expandMenu(linkElement);
      }
    });
  });

  document.querySelectorAll('.nav-menu > ul > li').forEach((title) => {
    elementsWithEventListener.push(title);
    title.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      expandMenu(title);
    });

    title.addEventListener('mouseleave', () => {
      collapseAllSubmenus(document.querySelector('nav'));
    });
  });

  const searchButton = document.querySelector('.nav-tools form');
  if (searchButton.hasAttribute('aria-expanded')) searchButton.removeAttribute('aria-expanded');

  const minicart = document.querySelector('header .nav-tools button.minicart');
  if (minicart) {
    elementsWithEventListener.push(minicart);
    minicart.onclick = () => cartApi.toggleCart('cart');
    cartApi.cartItemsQuantity.watch((quantity) => {
      minicart.textContent = quantity || '';
    });
  }
}

function reAttachEventListeners() {
  if (mql.matches) {
    addEventListenersDesktop();
  } else {
    addEventListenersMobile();
  }
}

async function loadNavigation() {
  let resp;

  // If in /drafts, try loading navigation from drafts folder as well
  const path = window.location.pathname;
  const isDraft = path.includes('/drafts');
  if (isDraft) {
    const parts = path.split('/');
    parts.pop();
    const draftPath = `${parts.join('/')}/nav.plain.html`;
    resp = await fetch(draftPath);
  }

  // Fallback to actual navigation
  if (!resp || !resp.ok) {
    resp = await fetch('/nav.plain.html');
  }

  return resp;
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  block.innerHTML = '';
  // fetch nav content
  const resp = await loadNavigation();
  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.innerHTML = html;

    // logo
    nav.querySelector('.nav-logo a').setAttribute('aria-label', 'Maidenform');

    // hamburger
    const hamburger = document.createElement('div');
    hamburger.classList.add('nav-hamburger');
    hamburger.innerHTML = '<span class="icon icon-mobile-menu" aria-label="menu" role="button"></span>';

    const expandHamburger = () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      document.body.style.overflowY = expanded ? '' : 'hidden';
      nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      document.querySelector('main').style.visibility = expanded ? '' : 'hidden';
    };

    hamburger.setAttribute('tabindex', '0');
    hamburger.addEventListener('click', expandHamburger);
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        expandHamburger();
      }
    });

    nav.querySelector(':scope > div').insertBefore(hamburger, nav.querySelector('.nav-menu'));
    nav.setAttribute('aria-expanded', 'false');

    // tools
    const toolContainer = nav.querySelector('.nav-tools');
    toolContainer.innerHTML = '';

    toolContainer.append(document.createRange().createContextualFragment(
      '<button class="wishlist">Open Wishlist</button>',
    ));

    toolContainer.append(document.createRange().createContextualFragment(
      `<div class="minicart-wrapper">
        <button class="minicart" aria-label="Open Cart"></button>
        <div></div>
      </div>`,
    ));

    const searchBar = document.createElement('form');
    searchBar.action = '/search';
    searchBar.innerHTML = `
      <input name="q" type="text" data-rfkid="rfkid_6" placeholder="Search" />
      <button class="search-button" aria-label="submit search query">Search</button>
      <span class="icon icon-x-lg close-button" />
    `;
    toolContainer.append(searchBar);
    const searchInput = toolContainer.querySelector('input[name="q"]');
    searchInput.addEventListener('focus', () => {
      import('../../scripts/search/search.js').then((module) => module.default(searchBar));
    }, { once: true });

    const login = document.createElement('a');
    login.classList.add('sign-in-link-desktop');
    login.innerText = 'Sign In';
    toolContainer.prepend(login);

    // link section
    const navMenuUl = document.createElement('ul');
    const menus = [...nav.querySelectorAll('.nav-menu > div')];
    for (let i = 0; i < menus.length - 1; i += 2) {
      const li = document.createElement('li');
      const menuTitle = menus[i];
      const menuDropdownList = menus[i + 1];
      menuTitle.classList.add('menu-nav-category');
      menuDropdownList.classList.add('menu-nav-dropdown');

      if (menuHasNoContent(menuDropdownList)) {
        menuTitle.classList.add('menu-nav-no-content');
        li.append(menuTitle);
        navMenuUl.append(li);
        // eslint-disable-next-line no-continue
        continue;
      }

      addDropdownIcon(menuTitle);
      li.append(menuTitle);

      li.classList.add('menu-expandable');

      // Add class name for each column in dropdown
      ['m-col-featured', 'm-col-2', 'm-col-3', 'm-feat-img', 'm-bg-img'].forEach((category, j) => {
        const node = menuDropdownList.querySelector(`:scope > div:nth-child(${j + 1})`);
        node?.classList.add(category, 'column');
        if (node?.children.length === 0) {
          node?.classList.add('empty');
        }
      });
      li.append(menuDropdownList);

      // Add top-level menu expansion event listener
      navMenuUl.append(li);

      // Create featured dropdown
      if (li.querySelector('.m-col-featured')?.children.length > 0) {
        const featuredP = document.createElement('p');
        featuredP.innerText = 'featured';
        li.querySelector('.m-col-featured')?.prepend(featuredP);
      }

      // Add second-level expansion even listener
      li.querySelectorAll('p + ul').forEach((subDropdown) => {
        const subDropdownTitle = subDropdown.previousElementSibling;
        subDropdownTitle.setAttribute('aria-expanded', 'false');
        subDropdownTitle.classList.add('m-expandable-title');
        wrapChildren(subDropdownTitle, 'span');
        subDropdown.classList.add('m-expandable-list');
        addDropdownIcon(subDropdownTitle);
      });

      // Link pictures
      li.querySelectorAll('.m-feat-img picture + a').forEach((link) => {
        const picture = link.previousElementSibling;
        const newLink = link.cloneNode();
        newLink.innerHTML = picture.outerHTML;
        picture.remove();
        link.parentElement.append(newLink);
        newLink.classList.add('linked-picture-desktop');
      });

      const backgroundImg = li.querySelector('.m-bg-img picture img');
      if (backgroundImg && backgroundImg.getAttribute('src')) {
        menuDropdownList.style.background = `url(${backgroundImg.getAttribute('src')})`;
        menuDropdownList.style.backgroundSize = 'cover';
      }
    }

    const loginMobile = document.createElement('li');
    loginMobile.classList.add('sign-in-link-mobile', 'menu-nav-category');
    loginMobile.innerHTML = '<a>Sign In</a>';
    navMenuUl.prepend(loginMobile);

    nav.querySelector('.nav-menu').innerHTML = navMenuUl.outerHTML;

    decorateIcons(nav);

    block.append(nav);

    // Handle different event listeners for mobile/desktop on window resize
    const removeAllEventListeners = () => {
      elementsWithEventListener.forEach((el) => {
        el.replaceWith(el.cloneNode(true));
      });
      elementsWithEventListener = [];
    };

    mql.onchange = () => {
      nav.setAttribute('aria-expanded', 'false');
      document.querySelector('main').style.visibility = '';
      removeAllEventListeners();
      collapseAllSubmenus(block);
      reAttachEventListeners();
    };

    reAttachEventListeners();
  }
}

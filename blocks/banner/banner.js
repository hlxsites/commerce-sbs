/* eslint-disable max-classes-per-file */
import { loadFragment } from '../../scripts/scripts.js';

const animationTime = 500; // animation time of .footer-banner > div.animated in css

// Scroll between banner pages by dragging
function makeScrollableWithDrag(item, end) {
  let startPosition;
  item.style.cursor = 'grab';
  item.style['user-select'] = 'none';

  function mouseMove(e) {
    const offset = e.pageX - startPosition;
    item.style.transform = `translateX(${offset}px)`;
  }

  function mouseUp(e) {
    const offset = e.pageX - startPosition;
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    document.removeEventListener('touchmove', mouseMove);
    document.removeEventListener('touchend', mouseUp);
    end(offset);
  }

  function mouseDown(e) {
    item.classList.remove('animated');

    startPosition = e.pageX;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('touchmove', mouseMove, { passive: true });
    document.addEventListener('touchend', mouseUp, { passive: true });
  }

  function reAttachListener() {
    item.addEventListener('mousedown', mouseDown);
    item.addEventListener('touchstart', mouseDown, { passive: true });
  }

  function removeListener() {
    item.removeEventListener('mousedown', mouseDown);
    item.removeEventListener('touchstart', mouseDown);
  }

  reAttachListener();

  return [removeListener, reAttachListener];
}

export class Carousel {
  constructor(items) {
    this.items = items;
    this.currentItemIndex = 0;
    this.totalItems = items.length;
    this.parent = items[0]?.parentElement;
    this.itemDragListeners = []; // Event listeners for dragging between pages
  }

  // eslint-disable-next-line class-methods-use-this
  playAnimation(currentItem, nextItem, reverse) {
    nextItem.classList.add('animated');
    currentItem.classList.add('animated');
    nextItem.style.transform = 'translateX(0)';
    currentItem.style.transform = reverse ? 'translateX(100%)' : 'translateX(-100%)';
  }

  changeShowingItem(nextItemIndex, reverse = false) {
    this.items.forEach((elem) => elem.classList.remove('animated'));

    const nextItem = this.items[nextItemIndex];
    const currentItem = this.items[this.currentItemIndex];

    // Prevent dragging during animation
    const [removeCurrentDrag, attachCurrentDrag] = this.itemDragListeners[this.currentItemIndex];
    const [removeNextDrag, attachNextDrag] = this.itemDragListeners[nextItemIndex];

    removeCurrentDrag();
    removeNextDrag();

    nextItem.style.transform = reverse ? 'translateX(-100%)' : 'translateX(100%)';

    // Add delay to allow for CSS style to be applied
    setTimeout(() => this.playAnimation(currentItem, nextItem, reverse), 20);

    setTimeout(() => {
      attachCurrentDrag();
      attachNextDrag();
    }, animationTime);

    this.currentItemIndex = nextItemIndex;
  }

  showPrevious() {
    const nextItemIndex = (this.currentItemIndex + this.totalItems - 1) % this.totalItems;

    this.changeShowingItem(nextItemIndex, true);
  }

  showNext() {
    const nextItemIndex = (this.currentItemIndex + this.totalItems + 1) % this.totalItems;

    this.changeShowingItem(nextItemIndex, false);
  }

  init() {
    this.parent.setAttribute('tabindex', '0');
    this.parent.addEventListener('focus', () => {
      this.stop();
    });
    this.parent.addEventListener('mouseover', () => {
      this.stop();
    });
    this.parent.addEventListener('mouseout', () => {
      this.start();
    });
    this.parent.addEventListener('blur', () => {
      this.start();
    });
    this.parent.addEventListener('keydown', (e) => {
      if (e.keyCode === 39 /* Arrow Right */) {
        this.showNext();
      }
      if (e.keyCode === 37 /* Arrow Left */) {
        this.showPrevious();
      }
    });
    this.items.forEach((item) => {
      this.itemDragListeners.push(makeScrollableWithDrag(item, (offset) => {
        if (offset < -20) {
          this.showNext();
        } else if (offset > 20) {
          this.showPrevious();
        }
      }));
    });
    this.start();
  }

  start() {
    this.interval = setInterval(() => this.showNext(), 7000);
  }

  stop() {
    clearInterval(this.interval);
  }
}

export class Modal {
  constructor(content, carousel) {
    this.content = content;
    this.id = `modal-${Math.random().toString(36).substr(2, 9)}`;
    this.carousel = carousel;
    this.onClose = null;

    // ESC event handler
    this.handleEscKey = (event) => {
      if (event.key === 'Escape') {
        this.hide();
      }
    };

    // Focus trap
    this.focusTrap = (event) => {
      if (event.key !== 'Tab' && event.keyCode !== 9) {
        return;
      }
      if (event.shiftKey) {
        if (document.activeElement === this.firstFocusableEl) {
          event.preventDefault();
          this.lastFocusableEl.focus();
        }
      } else if (document.activeElement === this.lastFocusableEl) {
        event.preventDefault();
        this.firstFocusableEl.focus();
      }
    };
  }

  static setHidden(bool) {
    document.body.querySelector('header').ariaHidden = bool;
    document.body.querySelector('main').ariaHidden = bool;
    document.body.querySelector('footer').ariaHidden = bool;
  }

  setOnClose(onClose) {
    this.onClose = onClose;
  }

  getId() {
    return this.id;
  }

  show() {
    this.modal = document.createRange().createContextualFragment(`
      <div class="modal-background">
        <div class="modal-content" role="dialog" aria-modal="true">
          <button aria-label="Close (ESC)" tabindex="0">X</button>
        </div>
      </div>
    `);
    this.modal.querySelector('.modal-content').appendChild(this.content);

    // Event listeners for closing modal
    this.modal.querySelector('.modal-background').addEventListener('click', () => this.hide());
    this.modal.querySelector('.modal-content button').addEventListener('click', () => this.hide());
    document.addEventListener('keyup', this.handleEscKey);
    this.modal.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation());

    this.modal = document.body.appendChild(this.modal.children[0]);
    Modal.setHidden(true);

    // Focus trap
    const focusableEls = this.modal.querySelector('.modal-content').querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    [this.firstFocusableEl] = focusableEls;
    this.lastFocusableEl = focusableEls[focusableEls.length - 1];
    this.modal.addEventListener('keydown', this.focusTrap);

    // Focus first element
    this.firstFocusableEl.focus();
    this.carousel.stop();
  }

  hide() {
    document.removeEventListener('keyup', this.handleEscKey);
    Modal.setHidden(false);
    this.modal.remove();
    this.carousel.start();

    if (this.onClose) {
      this.onClose();
    }
  }
}

async function decorateCarousel(children) {
  const carousel = new Carousel(children);

  // Add buttons to entries with modal
  children.forEach((promotion) => {
    // Get modal content
    Array.from(promotion.children).filter((section) => section.classList.contains('modal')).forEach((section) => {
      // Create modal
      const modal = new Modal(section, carousel);

      // Add details button
      const button = document.createElement('button');
      promotion.appendChild(button);
      button.innerHTML = 'Details';
      button.ariaExpanded = false;
      button.setAttribute('aria-controls', modal.getId());
      button.addEventListener('click', (event) => {
        event.target.ariaExpanded = true;
        modal.show();
      });

      // Set modal close action
      modal.setOnClose(() => {
        button.ariaExpanded = false;
      });
    });
  });

  // Only enable carousel if more than one promotion
  if (children.length > 1) {
    carousel.init();
  }
}

async function decoratePromotion(block, promotion) {
  const promotionWrapper = document.createElement('div');
  block.appendChild(promotionWrapper);

  // Load fragment
  const fragment = await loadFragment(promotion.Content);
  const fragmentSections = fragment.querySelectorAll(':scope .section');
  fragmentSections.forEach((section) => {
    const sectionWrapper = document.createElement('div');
    section.classList.remove('section');
    sectionWrapper.classList.add(...section.classList);
    promotionWrapper.appendChild(sectionWrapper);

    // Get section content (and only allow default content)
    const sectionContent = section.querySelector('.default-content-wrapper');
    if (!sectionContent || !sectionContent.hasChildNodes()) {
      return;
    }
    const children = sectionContent.childNodes;

    // Remove paragraph to extract banner text
    if (children.length === 1 && children[0] instanceof HTMLParagraphElement) {
      sectionWrapper.append(...children[0].childNodes);
      sectionContent.removeChild(children[0]);
    }

    // Append additional optional content including modal
    sectionWrapper.append(...children);
  });
}

async function readMetadata(block) {
  const metadata = {
    Type: 'default',
  };

  Array.from(block.children).forEach((row) => {
    if (row.hasChildNodes && row.childElementCount === 2) {
      const key = row.children[0].textContent;
      metadata[key] = row.children[1].textContent;
    }
    block.removeChild(row);
  });

  return metadata;
}

export default async function decorate(block) {
  const metadata = await readMetadata(block);

  // Apply styling
  block.parentNode.parentNode.classList.add(`banner-type-${metadata.Type}`);

  // Load banner content
  // eslint-disable-next-line import/no-absolute-path,import/no-unresolved,no-shadow
  const bannersScript = await import('/scripts/banners.js');
  const promotions = await bannersScript.default(metadata.Type);

  // Create all promotions
  await Promise.all(promotions.map(async (promotion) => decoratePromotion(block, promotion)));

  // Add modals and create carousel
  await decorateCarousel(Array.from(block.children));
}

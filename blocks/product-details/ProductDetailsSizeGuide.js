import { h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

export default function SizeGuide({ sizeChartUrl }) {
  // eslint-disable-next-line no-use-before-define
  const sizeGuideModal = new SizeGuideModal();
  const imageUrl = sizeGuideModal.getSizeGuideImage(sizeChartUrl);
  if (typeof imageUrl !== 'undefined') {
    return html`
      <div class="fit-guide">
        <button aria-label="Size Guide" onclick=${(event) => { event.preventDefault(); sizeGuideModal.showModal(imageUrl); }}>
          <span class="size-guide">Size Guide</span>
        </button>
      </div>
    `;
  }

  return '';
}

export class SizeGuideModal {
  constructor() {
    this.id = `size-guide-modal-${Math.random().toString(36).slice(2, 10)}`;
    this.cdnUrl = 'https://cdn.maidenform.com/catalog/product';
    this.imageParameters = '?quality=100&bg-color=255,255,255';

    this.handleEscKey = (event) => {
      if (event.key === 'Escape') {
        this.hideModal();
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

  showModal(sizeChartUrl) {
    this.sizeGuideModal = document.createRange().createContextualFragment(`
      <div class="modal-background size-guide">
        <div class="modal-content size-guide" role="dialog" aria-modal="true">
          <h1>Size Guide</h1>
          <img class="modal-image size-guide-image" src=${sizeChartUrl} />
          <button aria-label="Close (ESC)" tabindex="0">X</button>
        </div>
      </div>
    `);

    this.sizeGuideModal.querySelector('.modal-background.size-guide').addEventListener('click', () => this.hideModal());
    this.sizeGuideModal.querySelector('.modal-content.size-guide button').addEventListener('click', () => this.hideModal());
    document.addEventListener('keyup', this.handleEscKey);
    this.sizeGuideModal.querySelector('.modal-content.size-guide').addEventListener('click', (e) => e.stopPropagation());

    this.sizeGuideModal = document.body.appendChild(this.sizeGuideModal.children[0]);
    SizeGuideModal.setHidden(true);

    const focusableEls = this.sizeGuideModal.querySelector('.modal-content.size-guide').querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    [this.firstFocusableEl] = focusableEls;
    this.lastFocusableEl = focusableEls[focusableEls.length - 1];
    this.sizeGuideModal.addEventListener('keydown', this.focusTrap);

    this.firstFocusableEl.focus();
  }

  getSizeGuideImage(sizeChartUrl) {
    if (sizeChartUrl !== '') {
      let imageUrl = '';
      // eslint-disable-next-line no-param-reassign
      sizeChartUrl = sizeChartUrl.startsWith('/') ? sizeChartUrl : `/${sizeChartUrl}`;
      imageUrl = this.cdnUrl + sizeChartUrl;

      return imageUrl + this.imageParameters;
    }

    return undefined;
  }

  hideModal() {
    document.removeEventListener('keyup', this.handleEscKey);
    SizeGuideModal.setHidden(false);
    this.sizeGuideModal.remove();
  }
}

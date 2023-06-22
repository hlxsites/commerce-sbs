import {
  h, Component, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Icon from './Icon.js';
import { getSkuFromUrl, renderFallbackImage } from '../../scripts/commerce.js';

const html = htm.bind(h);

function OptimizedSources({
  src,
  sizes,
  width,
  height,
  loading = 'lazy',
}) {
  const addWebpParams = (url) => {
    url.searchParams.set('format', 'webply');
    url.searchParams.set('optimize', 'medium');
    url.searchParams.delete('quality');
    url.searchParams.delete('dpr');
    url.searchParams.delete('bg-color');
  };

  const webpUrl = new URL(src);
  addWebpParams(webpUrl);

  /* eslint-disable indent */
  return html`
      <${Fragment} >
        ${sizes.map((size) => {
          const url = new URL(src);
          url.searchParams.set('width', size.width);
          const jpgTag = html`<source media=${`(max-width: ${size.media}px)`} srcset=${url.href}/>`;
          addWebpParams(url);
          const webpTag = html`<source media=${`(max-width: ${size.media}px)`} srcset=${url.href}/>`;
          return html`${webpTag}\n${jpgTag}`;
        })}
        <source srcset=${webpUrl} />
        <img height=${height} width=${width} src=${src} loading=${loading} onerror=${renderFallbackImage} />
    <//>
  `;
  /* eslint-enable indent */
}

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      thumbnailSlide: 0,
    };
  }

  getImages() {
    const productImages = this.props.product?.productImages;

    if (productImages) {
      const rawImages = productImages
        .map((image) => image.url
          .replace('productH', 'product/H')
          .replace('productM', 'product/M')
          .replace('cdn.maidenform.com', 'franklin.maidenform.com/images/catalog'))
        .slice(0);

      this.thumbnailImages = rawImages.map((image) => `${image}?width=247&quality=100&bg-color=255,255,255`);
      this.images = rawImages.map((image) => `${image}?width=700&quality=100&bg-color=255,255,255&dpr=1`);
    }
  }

  static negativeModulo(i, mod) {
    return ((i % mod) + mod) % mod;
  }

  updateThumbnailSlide(getNextIndex) {
    const nextIndex = getNextIndex(this.state.thumbnailSlide);
    const limitedIndex = Math.min(Math.max(nextIndex, 0), this.thumbnailImages.length - 1);
    this.setState({ thumbnailSlide: limitedIndex });
  }

  updateSlide(getNextIndex) {
    const nextIndex = getNextIndex(this.state.slide);
    const correctedNextIndex = Carousel.negativeModulo(nextIndex, this.images.length);
    this.setState({
      slide: correctedNextIndex,
      thumbnailSlide: correctedNextIndex,
    });
  }

  renderLabel() {
    const amasty = this.props.product?.amasty;
    if (!amasty) {
      return null;
    }
    return html`<div class="amasty-wrapper">
      <div class=${amasty.position} style=${amasty.style} dangerouslySetInnerHTML=${{ __html: amasty.txt }} />
    </div>`;
  }

  render() {
    this.getImages();

    if (!this.images || !this.thumbnailImages) {
      this.images = [`${window.origin}/product-images/${getSkuFromUrl().toLowerCase()}.jpg`];
      this.thumbnailImages = [];
    }

    return html`
        <div class="product-detail-carousel">
            <div class="carousel-thumbnails-wrapper">
                <div class="thumbnail-controls">
                    <button name="thumbnail-prev" disabled=${this.props.shimmer} onClick=${() => this.updateThumbnailSlide((index) => index - 1)}><${Icon} name="caret-up-fill" /></button>
                    <button name="thumbnail-next" disabled=${this.props.shimmer} onClick=${() => this.updateThumbnailSlide((index) => index + 1)}><${Icon} name="caret-down-fill" /></button>
                </div>
                <ul class="carousel-thumbnails" style="transform: translateY(-${(this.state.thumbnailSlide === 0 ? 0 : 1) * -252.7 + (this.state.thumbnailSlide) * 322.6}px)">
                    ${this.props.shimmer || this.thumbnailImages.map((image, i) => html`
                          <li key=${image} onClick=${() => this.setState({ slide: i, thumbnailSlide: i })}>
                              <picture>
                                  <${OptimizedSources} src=${image} height="313" width="247" loading=${'lazy'} sizes=${[]} />
                              </picture>
                          </li>`)}
                    ${this.props.shimmer && [1, 2, 3].map(() => html`
                        <li><picture class="shimmer"><img height="313" width="247" /></picture></li>
                    `)}
                </ul>
            </div>
            <div class="carousel-stage-wrapper">
                ${this.renderLabel()}
                ${this.props.shimmer || html`
                    <div class="main-controls">
                        <button name="stage-prev" onClick=${() => this.updateSlide((index) => index - 1)}><${Icon} name="caret-left-fill" /></button>
                        <button name="stage-next" onClick=${() => this.updateSlide((index) => index + 1)}><${Icon} name="caret-right-fill" /></button>
                    </div>
                `}
                <ul 
                        class="carousel-stage"
                        style="transform: translateX(-${this.state.slide * 100}%)"
                >
                    ${this.props.shimmer || this.images.map((image, i) => html`
                        <li key=${image} active=${i === this.state.slide ? 'true' : 'false'}>
                            <picture>
                                <${OptimizedSources} src=${image} width="888" height="700" loading=${i === 0 ? 'eager' : 'lazy'} sizes=${[{ media: 450, width: 450 }, { media: 2000, width: 700 }]} />
                            </picture>
                        </li>
                    `)}
                    ${this.props.shimmer && html`
                        <li><picture class="shimmer"><img width="888" height="700" /></picture></li>
                    `}
                </ul>
            </div>
        </div>
    `;
  }
}

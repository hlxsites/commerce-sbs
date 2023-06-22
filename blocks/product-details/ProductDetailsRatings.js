import { Component, h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { getProductRatingsSummary } from '../../scripts/scripts.js';

const html = htm.bind(h);

function Rating({
  sku, value, count, onMouseOver, onMouseOut, children,
}) {
  return html`
      <div class="rating" onMouseOver=${() => onMouseOver?.(sku)} onMouseOut=${onMouseOut}>
          <div class="stars" style="--rating: ${value ?? 0};"></div>
          <span>(${count})</span>
          ${children}
      </div>
  `;
}

function widthFromRating(count, total) {
  return total > 0 ? count / total : 0; // 0 to 1
}

function RatingModal({ ratingsSummary, showRatingsModal }) {
  const total = ratingsSummary?.map((rating) => rating.count).reduce((a, b) => a + b, 0);

  return html`
    <div role="dialog"
        id="ratings_dialog"
        aria-modal="true"
        class="sidebar-section reviews-modal"
        hidden="${showRatingsModal ? undefined : 'true'}"
        aria-label="${total ? `${total} reviews` : undefined}" >
      <div id="ratings_dialog_ratings">
        ${ratingsSummary?.map((rating) => html`
        <div aria-label="${rating.count} reviews with ${rating.key} stars. " class="bar-wrapper">
          <span class="ratings-dialog-ratings-key">${rating.key}<span class="star"/></span>
          <div class="bar">
            <div class="bar-filled" style="--width: ${widthFromRating(rating.count, total) ?? 0}"></div>
          </div>
          ${rating.count}
        </div>
        `)}
        <div class="read-review-wrapper"><a href="#product-reviews" class="read-reviews">Read ${total} Reviews</a></div>
      </div>
  </div>
  `;
}

export default class Ratings extends Component {
  constructor(props) {
    super(props);
    this.displayRatingsModal = this.displayRatingsModal.bind(this);
    this.hideRatingsModal = this.hideRatingsModal.bind(this);
    this.state = {
      showRatingsModal: false,
      ratingsSummary: null,
    };
  }

  displayRatingsModal(sku) {
    if (!this.state.ratingsSummary) {
      getProductRatingsSummary(sku).then((ratingsSummary) => {
        this.setState({
          ratingsSummary,
          showRatingsModal: true,
        });
      });
    } else {
      this.setState({ showRatingsModal: true });
    }
  }

  hideRatingsModal() {
    this.setState({ showRatingsModal: false });
  }

  render() {
    const { product } = this.props;
    return html`
      <${Rating} sku=${product?.sku} value=${product?.rating ?? 0} count=${product?.numReviews}
        onMouseOver=${(sku) => product?.numReviews > 0 && this.displayRatingsModal(sku)}
        onMouseOut=${product?.numReviews > 0 && this.hideRatingsModal}>
        ${product?.numReviews > 0 && html`
          <${RatingModal}
            ratingsSummary=${this.state.ratingsSummary}
            showRatingsModal=${this.state.showRatingsModal}/>
        `}
      </>
      `;
  }
}

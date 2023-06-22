const bannersURL = '/banners.json?sheet=banners';

let banners;

async function fetchBanners() {
  try {
    // Fetch the JSON data
    const response = await fetch(bannersURL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    banners = data;
  } catch (error) {
    banners = []; // so we don't try to fetch again
  }
}

function convertToDate(input) {
  if (!input || Number.isNaN(+input)) {
    return null;
  }

  // From https://github.com/adobe/helix-sidekick-extension/blob/main/src/extension/view/json.js#L31
  const date = +input > 99999
    ? new Date(+input * 1000)
    : new Date(Math.round((+input - (1 + 25567 + 1)) * 86400 * 1000));

  return date.toString() !== 'Invalid Date' ? date : null;
}

async function getActiveBanners(bannerIdentifier) {
  // Fetch banners once, otherwise use cached version
  if (!banners) {
    await fetchBanners();
  }

  const date = new Date();
  return banners.filter((item) => {
    // Check position
    if (item.Position !== bannerIdentifier) {
      return false;
    }

    // Check dates
    const dateFrom = convertToDate(item['Date from']);
    const dateTo = convertToDate(item['Date to']);
    return (!dateFrom || dateFrom <= date) && (!dateTo || dateTo >= date);
  });
}

export default getActiveBanners;

function getConfigRow(rows, name) {
  return rows.find((row) => row.children[0].textContent.toLowerCase() === name);
}

function decorateVideo(video, target) {
  const videoTag = document.createElement('video');
  videoTag.toggleAttribute('autoplay', true);
  videoTag.toggleAttribute('muted', true);
  videoTag.toggleAttribute('playsinline', true);
  videoTag.toggleAttribute('loop', true);
  /* videoTag.toggleAttribute('controls', false); */
  videoTag.setAttribute('poster', video.poster);
  videoTag.setAttribute('title', video.title);
  videoTag.innerHTML = `<source src="${video.videoUrl}" type="video/mp4">`;
  target.innerHTML = '';
  target.appendChild(videoTag);
  videoTag.muted = true;
}

function decorateOverlay(overlay, overlaySticker) {
  overlay.firstElementChild.remove();
  const overlayContent = overlay.firstElementChild;
  overlayContent.classList.add('overlay-content');

  if (overlaySticker) {
    const iconSpan = overlaySticker.querySelector('span.icon');
    const icon = iconSpan.classList[1].substring(5);
    overlay.insertAdjacentHTML(
      'beforebegin',
      `<style>.hero-video .overlay-content::before { content: url("${window.hlx.codeBasePath}/icons/${icon}.svg");}</style>`,
    );
    overlaySticker.remove();
  }

  overlay.replaceWith(overlayContent);
}

export default function decorate(block) {
  const configRows = [...block.children];
  const mobileVideoRow = getConfigRow(configRows, 'mobile');
  const desktopVideoRow = getConfigRow(configRows, 'desktop');
  const overlayRow = getConfigRow(configRows, 'overlay');
  const overlayStickerRow = getConfigRow(configRows, 'overlay sticker');

  const [mobileVideo, desktopVideo] = [
    [mobileVideoRow, 'mobile'],
    [desktopVideoRow, 'desktop'],
  ].map(([row, typeHint]) => {
    const poster = row.querySelector('img');
    let optimizedPosterSrc;
    if (poster) {
      const srcURL = new URL(poster.src);
      const srcUSP = new URLSearchParams(srcURL.search);
      srcUSP.set('format', 'webply');
      srcUSP.set('width', `${typeHint === 'mobile' ? 480 : 2000}`);
      optimizedPosterSrc = `${srcURL.pathname}?${srcUSP.toString()}`;
    }

    return {
      type: typeHint,
      videoUrl: row.children[1]?.children[1]?.textContent,
      poster: optimizedPosterSrc,
      title: (poster && poster.getAttribute('alt')) || 'hero video',
    };
  });

  const mobileVideoContainer = document.createElement('div');
  mobileVideoContainer.classList.add('video-mobile');
  mobileVideoRow.replaceWith(mobileVideoContainer);

  const desktopVideoContainer = document.createElement('div');
  desktopVideoContainer.classList.add('video-desktop');
  desktopVideoRow.replaceWith(desktopVideoContainer);

  const addVideos = (e) => {
    if (e.matches) {
      decorateVideo(mobileVideo, mobileVideoContainer);
      desktopVideoContainer.textContent = '';
    } else {
      mobileVideoContainer.textContent = '';
      decorateVideo(desktopVideo, desktopVideoContainer);
    }
  };
  const mql = window.matchMedia('only screen and (max-width: 600px)');
  mql.onchange = addVideos;
  addVideos(mql);

  if (overlayRow) {
    decorateOverlay(overlayRow, overlayStickerRow);
  }
}

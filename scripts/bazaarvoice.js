import { loadScript } from './scripts.js';
import { loadCSS } from './lib-franklin.js';
import { getConfigValue } from './configs.js';

let bazaarVoiceLoaded = false;
export default async function loadBazaarVoice() {
  if (bazaarVoiceLoaded) {
    return;
  }

  bazaarVoiceLoaded = true;

  const bazaarvoiceEndpoint = await getConfigValue('bazaarvoice-app');

  loadScript(bazaarvoiceEndpoint);
  loadCSS('/styles/bazaarvoice.css');
}

export async function loadCrl8() {
  const crl8SiteName = 'maidenform-py0jjh';

  /* start of reverse engineered minified original JS */
  const crl8Instances = [];
  const crl8 = window.crl8 || {};
  let initialized = false;
  // eslint-disable-next-line func-names
  crl8.ready = function (instance) {
    // eslint-disable-next-line no-unused-expressions
    initialized ? instance() : crl8Instances.push(instance);
  };
  // eslint-disable-next-line func-names
  crl8.pixel = function () {
    // eslint-disable-next-line prefer-rest-params
    crl8.pixel.q.push(arguments);
  };
  crl8.pixel.q = crl8.pixel.q || [];

  const crl8DebugParam = window.document.location.search.indexOf('crl8-debug=true') !== -1
    ? 'js'
    : 'min.js';
  const crl8ScriptExtension = crl8.debug || crl8DebugParam;
  const crl8DynamicScript = `${window.document.location.protocol}//edge.curalate.com/sites/${crl8SiteName}/site/latest/site.${crl8ScriptExtension}`;

  // eslint-disable-next-line func-names
  const crl8Callback = function () {
    initialized = true;
    crl8Instances.forEach((instance) => instance());
  };
  /* end of reverse engineered minified original JS */

  loadScript(crl8DynamicScript, [], crl8Callback);
  loadBazaarVoice();
}

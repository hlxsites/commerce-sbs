// Determine the environment
export const calcEnvironment = () => {
  const { href } = window.location;
  const param = new URL(window.location).searchParams.get('config');
  if (param && !href.includes('maidenform.com')) {
    return param;
  }
  // determine instance type
  let environment;
  if (href.includes('.hlx.live') || href.includes('maidenform.com')) {
    environment = 'prod';
  }

  if (href.includes('.hlx.page')) {
    environment = 'stage';
  }

  if (href.includes('localhost')) {
    environment = 'dev';
  }
  return environment;
};

// Build the URL to get the configurations of the environment
/**
 * @param {*} environment - leave empty to auto calculate the environment
 * @returns config.json?sheet=<environment>
 */
function buildConfigURL(environment) {
  const env = (!environment) ? calcEnvironment() : environment;
  const configURL = new URL(`${window.location.origin}/configs.json?`);
  configURL.searchParams.set('sheet', env);
  return configURL;
}
/**
 * @param {*} environment - leave empty to auto calculate the environment
 * @returns - configuration (key,value) pairs of the environment as configured in config.xslx
 */
export const getEnvironmentConfigs = async (environment) => {
  const env = (!environment) ? calcEnvironment() : environment;
  let configJSON = window.sessionStorage.getItem(`config:${env}`);
  if (!configJSON) {
    const configURL = buildConfigURL(env);
    const response = await fetch(
      configURL,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'cache-control': 'no-cache',
        },
      },
    );
    const result = await response.json();
    configJSON = JSON.stringify(result);
    window.sessionStorage.setItem(`config:${env}`, configJSON);
  }
  return configJSON;
};
/**
 * @param {*} configParam - request value of a specific parameter
 * @param {*} environment - (optional) environment
 * @returns config value of the key
 */
export const getConfigValue = async (configParam, environment) => {
  const env = (!environment) ? calcEnvironment() : environment;
  const configJSON = await getEnvironmentConfigs(env);
  const configElements = JSON.parse(configJSON).data;
  let configValue = '';
  configElements.forEach((element) => {
    if (element.key === configParam) {
      configValue = element.value;
    }
  });
  return configValue;
};

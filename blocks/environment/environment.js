import {
  getEnvironmentConfigs,
  getConfigValue,
}
  from '../../scripts/configs.js';

const printConfigs = (configData) => {
  const main = document.querySelector('main');
  const configDiv = document.createElement('div');
  configDiv.setAttribute('class', 'configuration');
  configDiv.innerHTML = configData;
  main.appendChild(configDiv);
};

const envConfigJSON = async (env) => {
  const configJSON = await getEnvironmentConfigs(env);
  printConfigs(` Configurations - ${configJSON}`);
};

const getConfigbyParam = async (configParam, env) => {
  const configVal = await getConfigValue(configParam, env);
  printConfigs(`${configParam} = ${configVal}`);
};
// the environment will calculated - refer to /scripts/configs.js
// if there is a query param added ?config=<env> to the URL <env> configs will be read
// from a sheet named <env> from configs.xslx
await envConfigJSON();
// the environment can be passed explicitly -
// make sure the helix-<environment> sheet added to configs.xslx in sharepoint
await envConfigJSON('prod');
// get the config value of the current environment
await getConfigbyParam('env');
// get the parameter value of any specific environment
await getConfigbyParam('instance', 'prod');

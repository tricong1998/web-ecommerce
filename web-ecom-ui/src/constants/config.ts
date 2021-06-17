import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

// only available to both node server and browser
export const config = {
  apiBaseUrl: publicRuntimeConfig.apiBaseUrl,
};

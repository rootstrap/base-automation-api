const { defineConfig } = require('cypress');

module.exports = defineConfig({
  
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
    video: false,
    snapshotOnly: true,
    experimentalMemoryManagement: true,
    experimentalModifyObstructiveThirdPartyCode: true,


    setupNodeEvents(on, config) {
      on('task', {
      })
      const environmentName = config.env.environmentName || 'qa';
      const environmentFilename = `./${environmentName}.settings.json`;
      console.log('loading %s', environmentFilename);
      const settings = require(environmentFilename);
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      console.log('loaded settings for environment %s', environmentName);


      return config;

    },
  },
});

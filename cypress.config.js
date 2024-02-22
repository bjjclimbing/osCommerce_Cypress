const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    firefoxItem: "Citizen Eco-Drive Silver Tone Men",
    chromeItem: "Royal London 41003-03",
    firefoxQty: "3",
    chromeQty: "2",
  },
  videosFolder: 'cypress/video',
  video: true,
  videoCompression: 32,
  screenshotsFolder: 'cypress/screenshots',
  screenshotsOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

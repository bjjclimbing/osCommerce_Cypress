const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: "./cypress/video",
  video: true,
  screenshotsOnRunFailure: true,
  videoCompression: false,
  videoUploadOnPasses: false,
  env: {
    firefoxItem: "Citizen Eco-Drive Silver Tone Men",
    chromeItem: "Royal London 41003-03",
    firefoxQty: "3",
    chromeQty: "2",
  },
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

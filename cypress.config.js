const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    firefoxItem: "Citizen Eco-Drive Silver Tone Men",
    chromeItem: "Royal London 41003-03",
    firefoxQty: "3",
    chromeQty: "2",
  },
  video: true,
  videoUploadOnPasses: false,
  videoCompression: 32,
  videoUploadOnFailures: true,
  videosFolder: "cypress/videos",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

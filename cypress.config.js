const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://lucesposa.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1320,
    viewportHeight: 1080,
  },
});

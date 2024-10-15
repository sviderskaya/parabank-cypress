const { defineConfig } = require("cypress");
const baseUrl = 'https://parabank.parasoft.com/parabank/';

module.exports = defineConfig({
  e2e: {
    baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

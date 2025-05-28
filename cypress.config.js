const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tqs7ve',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
     reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Curso Cypress',
      reportPageTitle: 'Projeto Curso Cypress',
     },
    baseUrl: 'https://automationpratice.com.br',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});

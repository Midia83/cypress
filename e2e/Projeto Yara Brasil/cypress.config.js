const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  baseUrl: ('https://career2.successfactors.eu/career?company=yaraintern&site=&lang=pt_BR&login_ns=login&loginFlowRequired=true&showLogOutMsg=true&brandUrl=&_s.crb=1Dz7UUb7uEX%252fwsxRD03FoPj941APJ5vM9X59MVEhRAM%253d'),
  defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

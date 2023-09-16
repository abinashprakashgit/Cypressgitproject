const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {username:"hello",
         password:12345,
        url:"https://rahulshettyacademy.com"},
        retries: {
          runMode: 2
          },
          projectId: "u6ox2u",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    //specPattern :'cypress/test/*.cy.js',
  },
});

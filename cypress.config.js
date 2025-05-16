// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gorest.co.in/public/v2",
    specPattern: "cypress/integration/**/*.js", // Ensure this matches your file path,
    projectId: "ja5f7v",

    env: {
      CYPRESS_API_TOKEN: process.env.CYPRESS_API_TOKEN,
    },
  },
});

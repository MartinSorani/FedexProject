import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 6000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'tnt assignment report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports',
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    screenshotOnRunFailure: true,
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e",
  timeout: 60000,
  use: {
    baseURL: "http://localhost:8000",
    headless: true,
  },
  webServer: {
    command:
      'bash -c \'export NVM_DIR="/usr/local/share/nvm" && source "$NVM_DIR/nvm.sh" && nvm use 22 && npm run develop\'',
    url: "http://localhost:8000",
    timeout: 300000,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});

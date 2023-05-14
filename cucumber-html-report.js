const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/CucumberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "CucumberBDDTestAutom" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Mars 07th23, 14:46 PM EST" },
      { label: "Execution End Time", value: "Mars 07th23, 15:03 PM EST" },
    ],
  },
});
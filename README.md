# Playwright Automation Framework

![Playwright Tests](https://github.com/vlchinen/playwright-api-inspector/actions/workflows/playwright.yml/badge.svg)

A test automation framework built with **Playwright** for API and UI testing.

The project demonstrates automated testing practices including REST API validation, browser automation, Page Object Model (POM), cross-browser execution, and GitHub Actions CI/CD integration.

---

## Tech Stack

- Node.js
- JavaScript
- Playwright
- Playwright Test Runner
- GitHub Actions CI/CD

---

## Project Structure

```
playwright-api-inspector/
│
├── pages/
│ └── LoginPage.js # Page Object Model classes
│
├── test/
│ ├── api/
│ │ └── products.spec.js # API automation tests
│ │
│ └── ui/
│ └── login.spec.js # UI automation tests
│
├── playwright.config.js # Test configuration
├── package.json
└── README.md
```

---

## Features

### API Automation

- REST API request testing
- HTTP status code validation
- JSON response validation
- API response data assertions

### UI Automation

- Browser-based UI testing
- Page Object Model (POM) architecture
- User flow automation
- Element validation

### Test Execution

- Chromium testing
- Firefox testing
- Parallel test execution
- HTML test reporting

### CI/CD

- Automated test execution using GitHub Actions
- Test runs triggered on every push
- Cross-browser validation in CI environment

---

## Installation

Clone repository:

```bash
git clone git@github.com:vlchinen/playwright-api-inspector.git

Install dependencies:
```
npm install
```
Install Playwright browsers:
```
npx playwright install
```
*** TEST
Run all tests:
```
npm test
```
Run API tests only:
```
npx playwright test test/api
```
Run UI tests only:
```
npx playwright test test/ui
```
Run tests with specific browser:
```
npx playwright test --project=chromium
```
***Test Report

Generate HTML report:
```
npx playwright show-report
```

***Author

Created as an automation testing framework project to demonstrate modern QA automation practices using Playwright.
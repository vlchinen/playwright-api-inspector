# Playwright Automation Framework

![Playwright Tests](https://github.com/vlchinen/playwright-automation/actions/workflows/playwright.yml/badge.svg)

A test automation framework built with **Playwright** for both **API testing** and **UI testing**.

This project demonstrates practical QA automation skills: Page Object Model (POM) design, REST API validation, cross-browser UI testing, and CI/CD integration with GitHub Actions.

---

## Why this project

Built to practice and demonstrate real-world test automation patterns rather than isolated scripts:

- **API tests** validate response status, schema, and data — not just "does it return 200"
- **UI tests** use Page Object Model so locators and actions are reusable, not copy-pasted across specs
- **CI pipeline** runs on every push, so tests are verified on a clean environment, not just locally
- **Failure artifacts** (screenshot, video, trace) are captured automatically to make debugging failed runs fast

---

## Tech Stack

- **Node.js**
- **JavaScript**
- **Playwright** (Latest)
- **Playwright Test Runner**
- **GitHub Actions** (CI/CD)

---

## Project Structure

```bash
playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI
├── pages/                          # Page Object Model
│   └── LoginPage.js
├── test/
│   ├── api/                        # API tests
│   │   └── *.spec.js
│   └── ui/                         # UI tests
│       └── *.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Features

### API Testing
- REST API request validation
- HTTP status code checks
- JSON response body assertions

### UI Testing
- Browser automation across user flows
- Page Object Model (POM) for maintainable test code
- Element and state assertions

### Cross-browser Execution
- Chromium
- Firefox

### CI/CD
- Automated test execution on every push via GitHub Actions
- Cross-browser validation in CI

### Reporting & Debugging
- HTML test report
- Screenshot, video, and trace captured automatically on failure

---

## Installation

```bash
# Clone repo
git clone https://github.com/vlchinen/playwright-automation.git

# Go to project folder
cd playwright-automation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## Running Tests

```bash
# Run all tests
npm test

# Run only API tests
npx playwright test test/api

# Run only UI tests
npx playwright test test/ui

# Run with a specific browser
npx playwright test --project=chromium

# Run in headed mode (see the browser)
npx playwright test --headed

# View HTML report
npx playwright show-report
```

---

## Author

**vlchinen**

Automation testing practice project built with Playwright to apply QA automation
practices (API + UI testing, POM, CI/CD) for job application purposes.\

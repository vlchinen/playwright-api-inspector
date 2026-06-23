# Playwright Automation Framework

![Playwright Tests](https://github.com/vlchinen/playwright-api-inspector/actions/workflows/playwright.yml/badge.svg)

A modern test automation framework using **Playwright** for both **API Testing** and **UI Testing**.

This project demonstrates best practices in automation testing including Page Object Model (POM), API validation, UI automation, and CI/CD integration with GitHub Actions.

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
playwright-api-inspector/
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

Features

API Testing: Request validation, status code, response body checking
UI Testing: Browser automation, user flows, assertions
Page Object Model (POM): Clean and maintainable test code
Cross-browser: Support Chrome, Firefox, WebKit
CI/CD: Automated testing on every push using GitHub Actions
Reporting: HTML report with screenshots, video, trace on failure


Installation
# Clone repo
git clone https://github.com/vlchinen/playwright-api-inspector.git

# Go to project folder
cd playwright-api-inspector

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install


# Run all tests
npm test

# Run only API tests
npx playwright test test/api

# Run only UI tests
npx playwright test test/ui

# Run with specific browser
npx playwright test --project=chromium

# Run in headed mode (see browser)
npx playwright test --headed

# View HTML report
npx playwright show-report


Author
vlchinen
Automation Testing Practice Project using Playwright.

Created for learning and job application purposes.
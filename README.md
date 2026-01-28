# Playwright Test Project - ITPM Assignment 1

This repository contains the Playwright test automation project for the IT3040/ITPM Assignment 1.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SSMShehan/ITPM-Assignment.git
   ```
2. Navigate to the project folder:
   ```bash
   cd ITPM-Assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

To run the test suite:

```bash
npx playwright test
```

## Generating Reports

After running the tests, a CSV report is generated (`test-results.csv`). To convert this to an Excel file:

```bash
node convert_csv_to_excel.js
```

This will create `test-results.xlsx`.

## Project Structure

- `tests/`: Contains test specifications and data.
- `playwright.config.ts`: Playwright configuration.
- `convert_csv_to_excel.js`: Helper script to generate Excel reports.

import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { allScenarios, TestScenario } from './test-data';

// File path for results
const resultsFile = 'test-results.csv';

// Helper to ensure header exists
const ensureHeader = () => {
    const csvHeader = 'TC ID,Test case name,Input,Expected output,Actual output,Status,Accuracy justification,What is covered\n';
    if (!fs.existsSync(resultsFile)) {
        try {
            fs.writeFileSync(resultsFile, '\uFEFF' + csvHeader);
        } catch (e) {
            // ignore if race condition and already created
        }
    }
};

test.describe('Sinhala Translation Assignments', () => {

    test.beforeAll(() => {
        if (fs.existsSync(resultsFile)) {
            try {
                fs.unlinkSync(resultsFile);
            } catch (e) {
                // ignore
            }
        }
    });

    for (const scenario of allScenarios) {
        test(scenario.description, async ({ page }) => {
            // Navigate to the translator
            await page.goto('https://www.swifttranslator.com/');

            // Confirmed selectors from debug
            const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
            const outputSelector = 'div.bg-slate-50.whitespace-pre-wrap';

            await page.fill(inputSelector, scenario.input);

            // Wait for output to be non-empty and stable
            const outputElement = page.locator(outputSelector);
            let actualOutput = '';

            // Poll for stable output
            for (let i = 0; i < 20; i++) {
                await page.waitForTimeout(1000); // Check every second

                const tagName = await outputElement.evaluate(el => el.tagName.toLowerCase()).catch(() => '');
                let currentText = '';
                if (tagName === 'input' || tagName === 'textarea') {
                    currentText = await outputElement.inputValue();
                } else {
                    currentText = (await outputElement.innerText()) || '';
                }

                if (currentText.trim().length > 0) {
                    actualOutput = currentText;
                    // Give it a bit more time to settle if it was just typing
                    if (i > 1 && currentText === actualOutput) break;
                }
            }

            // Final read in case loop finished
            if (!actualOutput) {
                const tagName = await outputElement.evaluate(el => el.tagName.toLowerCase()).catch(() => '');
                if (tagName === 'input' || tagName === 'textarea') {
                    actualOutput = await outputElement.inputValue();
                } else {
                    actualOutput = (await outputElement.innerText()) || '';
                }
            }

            // Compare
            const isMatch = actualOutput.trim() === scenario.expectedOutput.trim();
            const status = isMatch ? 'Pass' : 'Fail';

            console.log(`${scenario.id}: ${status}`);

            // Write result
            ensureHeader();
            const escape = (text: string) => `"${text.replace(/"/g, '""')}"`;
            const row = `${escape(scenario.id)},${escape(scenario.description)},${escape(scenario.input)},${escape(scenario.expectedOutput)},${escape(actualOutput)},${escape(status)},${escape(scenario.justification)},${escape(scenario.whatIsCovered)}\n`;

            try {
                fs.appendFileSync(resultsFile, row);
            } catch (error) {
                console.error('Error writing to CSV:', error);
            }

            expect(actualOutput.trim()).toBe(scenario.expectedOutput.trim());
        });
    }
});

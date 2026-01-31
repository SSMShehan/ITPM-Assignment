import { test } from '@playwright/test';
import * as fs from 'fs';
import { allScenarios } from './test-data';

// File path for results
const resultsFile = 'test-results.csv';

// Helper to ensure header exists
const ensureHeader = () => {
    const csvHeader = 'TC ID,Test Case Name,Input,Expected Output,Actual Output,Status,Technique Used,Justification,What is Covered\n';
    if (!fs.existsSync(resultsFile)) {
        try {
            fs.writeFileSync(resultsFile, '\uFEFF' + csvHeader);
        } catch (e) {
            // ignore if race condition and already created
        }
    }
};

test.describe('Singlish to Sinhala Translation Tests (35 Test Cases)', () => {

    test.beforeAll(() => {
        // Clean up previous results
        if (fs.existsSync(resultsFile)) {
            try {
                fs.unlinkSync(resultsFile);
            } catch (e) {
                // ignore
            }
        }
    });

    // Generate tests for all 35 scenarios
    for (const scenario of allScenarios) {
        test(scenario.id + ' - ' + scenario.description, async ({ page }) => {
            // Navigate to the translator
            await page.goto('https://www.swifttranslator.com/');

            // Wait for page to fully load
            await page.waitForLoadState('networkidle');

            // Selectors
            const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
            const outputSelector = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50';

            // Wait for input to be visible
            await page.waitForSelector(inputSelector, { state: 'visible', timeout: 10000 });

            // Use fill for long inputs (faster), type for short inputs (more realistic)
            await page.fill(inputSelector, '');
            if (scenario.input.length > 100) {
                // For long inputs, use fill to avoid timeout
                await page.fill(inputSelector, scenario.input);
            } else {
                // For short inputs, type slowly for real-time translation
                await page.type(inputSelector, scenario.input, { delay: 50 });
            }

            // Wait for translation to complete
            await page.waitForTimeout(6000);

            // Get output
            const outputElement = page.locator(outputSelector).first();
            let actualOutput = '';

            try {
                actualOutput = await outputElement.innerText({ timeout: 5000 });
            } catch (e) {
                // Try alternative selector
                const altOutput = page.locator('div.bg-slate-50.whitespace-pre-wrap').first();
                try {
                    actualOutput = await altOutput.innerText({ timeout: 3000 });
                } catch (e2) {
                    actualOutput = '';
                }
            }

            // Verify actual vs expected
            const isMatch = actualOutput.trim() === scenario.expectedOutput.trim();
            const status = isMatch ? 'Pass' : 'Fail';

            console.log(`[${status}] ${scenario.id}: ${scenario.description}`);

            // Save result to CSV
            ensureHeader();
            const escape = (text: string) => `"${text.replace(/"/g, '""').replace(/\n/g, '\\n')}"`;
            const row = [
                escape(scenario.id),
                escape(scenario.description),
                escape(scenario.input),
                escape(scenario.expectedOutput),
                escape(actualOutput),
                escape(status),
                escape(scenario.technique),
                escape(scenario.justification),
                escape(scenario.whatIsCovered)
            ].join(',') + '\n';

            try {
                fs.appendFileSync(resultsFile, row);
            } catch (error) {
                console.error('Failed to write to CSV', error);
            }
        });
    }
});

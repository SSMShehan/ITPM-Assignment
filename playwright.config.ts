import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests', // Look for tests in the 'tests' directory
    use: {
        headless: false, // Run browser in headed mode to see execution
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
    },
    reporter: [['list'], ['html']],
};

export default config;

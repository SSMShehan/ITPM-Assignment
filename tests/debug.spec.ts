import { test } from '@playwright/test';
import * as fs from 'fs';

test('debug selectors', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForTimeout(5000);

    let output = '';

    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
    await page.fill(inputSelector, 'mama');
    await page.waitForTimeout(3000);

    // Check in-place
    const inputValue = await page.inputValue(inputSelector);
    output += `Input Value after typing: "${inputValue}"\n`;

    // Check inputs
    const inputs = await page.locator('input').all();
    output += `Found ${inputs.length} inputs\n`;
    for (let i = 0; i < inputs.length; i++) {
        const val = await inputs[i].inputValue();
        const id = await inputs[i].getAttribute('id');
        output += `Input ${i}: id="${id}", value="${val}"\n`;
    }

    // Check divs with text content 'මම' again using standard locator to be sure, and simple looping (expensive but safe)
    // Actually, let's just dump the textContent of likely containers (e.g. any div with a border/class?)
    // Or just dump <body> text to see if it's there?
    const bodyText = await page.innerText('body');
    output += `Body text contains "මම": ${bodyText.includes('මම')}\n`;

    // Find all divs and print if they contain 'මම'
    const allDivs = await page.locator('div').all();
    for (let i = 0; i < allDivs.length; i++) {
        const text = await allDivs[i].innerText();
        if (text && text.includes('මම') && text.length < 100) {
            const id = await allDivs[i].getAttribute('id');
            const cls = await allDivs[i].getAttribute('class');
            output += `Div with 'මම': id="${id}", class="${cls}", text="${text}"\n`;
        }
    }

    fs.writeFileSync('selectors.txt', output);
});

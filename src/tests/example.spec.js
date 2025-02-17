import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    const title = await page.title();
    expect(title).toBe("YouTube");
});
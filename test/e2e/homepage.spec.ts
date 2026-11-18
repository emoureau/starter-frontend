import { expect, test } from '@playwright/test'

test('homepage shows the hello world heading', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: 'Hello, world!' })).toBeVisible()
})

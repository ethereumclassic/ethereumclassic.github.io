const { test, expect } = require("@playwright/test");

test("homepage loads and has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Ethereum Classic/i);
});

test("homepage has main content", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  // Check that the page has rendered meaningful content (not a blank page)
  const bodyText = await page.locator("body").textContent();
  expect(bodyText.length).toBeGreaterThan(100);
});

test("navigation links are present", async ({ page }) => {
  await page.goto("/");
  const links = page.locator("a");
  const count = await links.count();
  expect(count).toBeGreaterThan(5);
});

test("no console errors on homepage", async ({ page }) => {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  // Allow time for any async errors to surface
  await page.waitForTimeout(3000);
  // Filter out known non-critical errors (e.g. analytics, third-party, HMR)
  const criticalErrors = errors.filter(
    (e) =>
      !e.includes("net::") &&
      !e.includes("favicon") &&
      !e.includes("WebSocket") &&
      !e.includes("potentially unsafe when doing server-side rendering")
  );
  expect(criticalErrors).toEqual([]);
});

test("content page (why-classic) loads with MDX body", async ({ page }) => {
  const response = await page.goto("/why-classic");
  expect(response.status()).toBe(200);
  const bodyText = await page.locator("body").textContent();
  expect(bodyText.length).toBeGreaterThan(200);
});

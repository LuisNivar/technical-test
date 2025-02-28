// @ts-check
import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:5173/";
const CAT_IMG_PREFIX_URL = "https://cataas.com";

/**
 * E2E Test
 * 1- Search p by rol
 * 2- Search img by rol
 */

test("App showed a fact and image", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  // 1- Search p by rol
  const fact = await page.getByRole("paragraph");
  const factContent = await fact.textContent();

  await expect(factContent?.length).toBeGreaterThan(0);

  // 2- Search img by rol
  const img = await page.getByRole("img");
  const imgScr = await img.getAttribute("src");

  await expect(imgScr?.startsWith(CAT_IMG_PREFIX_URL)).toBeTruthy();
});

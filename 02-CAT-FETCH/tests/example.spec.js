// @ts-check
import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:5173/";
const CAT_IMG_PREFIX_URL = "https://cataas.com";

/**
 * E2E Test
 * 1- Search p by rol
 * 2- Search img by rol
 * 3- Press button
 * 4- Verify if change the fact and img
 */

test("App showed a fact and image", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  // 1- Search p by rol
  const fact = page.locator("p");
  const factContent = await fact.textContent();

  await expect(factContent?.length).toBeGreaterThan(0);

  // 2- Search img by rol
  const img = page.locator("img");
  const imgScr = await img.getAttribute("src");

  expect(imgScr?.startsWith(CAT_IMG_PREFIX_URL)).toBeTruthy();

  //  4- Press button
  await page.locator("button").click();

  await page.waitForSelector("p");
  await page.waitForSelector("img");

  //  5- Verify if change the fact and img
  await page.waitForFunction(
    (oldText) => document.querySelector("p")?.textContent !== oldText,
    factContent //← oldText
  );

  await page.waitForFunction(
    (oldScr) => document.querySelector("img")?.src !== oldScr,
    imgScr // ← oldScr
  );

  const newFactContent = await fact.textContent();
  const newImgScr = await img.getAttribute("src");

  // console.log("Old:", { factContent, imgScr });
  // console.log("New:", { newFactContent, newImgScr });

  const isRefreshed = newFactContent !== factContent && newImgScr !== imgScr;

  expect(isRefreshed).toBeTruthy();
});

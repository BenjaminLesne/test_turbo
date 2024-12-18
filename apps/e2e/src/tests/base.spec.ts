import { expect } from "@playwright/test";
import { testScreenshot, waitLoadingEnds } from "../lib/utils/tests";
import { test } from "../lib/utils/fixtures";
import { TAGS } from "@/lib/constants";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test(
  "snapshot on a very big screen",
  { tag: TAGS.snapshot },
  async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop only!");

    await page.setViewportSize({ width: 3840, height: 2160 });

    await waitLoadingEnds({ page });

    await testScreenshot({ page, target: page });
  },
);

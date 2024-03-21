import { test, expect, describe, beforeEach, afterEach } from "vitest";
import puppeteer, { Browser } from "puppeteer";
import InternalRelativeApi from "src/types/e-internal-relative-api";
import axios from "axios";
import IServerFakeTime from "src/types/e2e/i-server-fake-time";
import PageTabs from "src/types/e-page-tabs";
import PageNestedTabs from "src/types/e-page-nested-tabs";

// --- run npm run dev
const BASE_URL = "http://localhost:3000";

describe("e2e middleware test", () => {
  let browser: Browser;

  beforeEach(async () => {
    // Launch the browser and create a new page before each test
    browser = await puppeteer.launch({ headless: "new" });
  });

  afterEach(async () => {
    // Close the browser after all tests are done
    await browser.close();
  });

  test("redirect to courses on non wednesday", async () => {
    const urlAPI = `${BASE_URL}${InternalRelativeApi.e2eFakeServerTime}`;
    const body: IServerFakeTime = {
      serverFakeTimeMs: 1702549920000, // ---> 14/Dec/23 (Thursday)
    };
    await axios.post(urlAPI, { ...body });
    const page = await browser.newPage();
    const url = `${BASE_URL}/${PageTabs.courses}/${PageNestedTabs.arbitrator}`;
    await page.goto(url);
    expect(page.url()).toBe(`${BASE_URL}/${PageTabs.courses}`);
  });

  test("redirect to courses/discounts on wednesday", async () => {
    const urlAPI = `${BASE_URL}${InternalRelativeApi.e2eFakeServerTime}`;
    const body: IServerFakeTime = {
      serverFakeTimeMs: 1702458733000, // ---> 13/Dec/23 (Wednesday)
    };
    await axios.post(urlAPI, { ...body });
    const page = await browser.newPage();
    const url = `${BASE_URL}/${PageTabs.courses}/${PageNestedTabs.arbitrator}`;
    await page.goto(url);
    expect(page.url()).toContain(
      `${BASE_URL}/${PageTabs.courses}/${PageNestedTabs.discounts}`
    );
  });
});

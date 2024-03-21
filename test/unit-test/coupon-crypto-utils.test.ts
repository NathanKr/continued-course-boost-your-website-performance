import { getTodayStartAndEnd } from "src/lib/server/coupon-crypto-utils";
import { test, expect, vi, afterEach } from "vitest";

afterEach(() => {
  vi.useRealTimers();
});

test("should return the start and end timestamps for the current day", () => {
  vi.useFakeTimers({
    toFake: ["Date"],
    now: new Date(2023, 0, 15, 12, 45, 29), // 15 - Jan - 2023
  });

  // Call the function with the mocked date
  const { dtStart, dtEnd, todayInMs } = getTodayStartAndEnd();

  // Assertions
  const msMistakeAllow = 1000;
  expect(Math.abs(dtStart-1673733600000)).toBeLessThan(msMistakeAllow);
  expect(Math.abs(dtEnd-1673819999000)).toBeLessThan(msMistakeAllow);
  expect(todayInMs).toBe(1673779529000);
});

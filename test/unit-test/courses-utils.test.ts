import { coursesUrlMid, coursesUrlReg } from "data/onlines-courses";
import CourseName from "src/types/e-course-name";
import { formatDuration } from "src/utils/client/utils";
import { test, expect, describe } from "vitest";

test("coursesUrlReg has all courses", () => {
  const enumValues = Object.values(CourseName);

  enumValues.forEach((course) => {
    expect(coursesUrlReg.has(course)).toBeTruthy();
  });
});

test("coursesUrlMid has all courses", () => {
  const enumValues = Object.values(CourseName);

  enumValues.forEach((course) => {
    expect(coursesUrlMid.has(course)).toBeTruthy();
  });
});

describe("formatDuration", () => {
  test("formatDuration should return correct string for various durations", () => {
    // Test case for 3 days
    expect(formatDuration(259200000)).toBe("3d");

    // Test case for 2 hours
    expect(formatDuration(7200000)).toBe("2h");

    // Test case for 5 minutes
    expect(formatDuration(300000)).toBe("5m");

    // Test case for 10 seconds
    expect(formatDuration(10000)).toBe("10s");

    // Test case for 0 milliseconds (expired)
    expect(formatDuration(0)).toBe("Expired");
  });

  test("formatDuration should handle singular and plural correctly", () => {
    // Test case for 1 day
    expect(formatDuration(86400000)).toBe("1d");

    // Test case for 1 hour
    expect(formatDuration(3600000)).toBe("1h");

    // Test case for 1 minute
    expect(formatDuration(60000)).toBe("1m");

    // Test case for 1 second
    expect(formatDuration(1000)).toBe("1s");
  });

  test('formatDuration should return "Expired" for negative durations', () => {
    expect(formatDuration(-1000)).toBe("Expired");
  });
});

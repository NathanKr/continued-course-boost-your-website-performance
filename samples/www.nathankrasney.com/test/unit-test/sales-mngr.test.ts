import { decryptCoupon } from "src/lib/server/coupon-crypto";
import CourseName from "src/types/e-course-name";
import PageNestedTabs from "src/types/e-page-nested-tabs";
import PageTabs from "src/types/e-page-tabs";
import CouponStatus from "src/types/sales/e-coupon-status";
import SaleCategory from "src/types/sales/e-sale-catgory";
import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";
import {
  createRelativeUrlPerSaleDay,
  getCouponStatusInfo,
  getCourseUrl,
  getCoursesFromSaleCatregory,
  isDiscount,
} from "src/utils/server/sales-mngr";
import { test, expect, describe, vi, afterEach } from "vitest";

describe("getCouponStatusInfo", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("should return CouponStatus.expired when coupon has expired", () => {
    // Mocking the current time to be after dtEnd
    vi.useFakeTimers({
      toFake: ["Date"],
      now: new Date(2023, 11, 11, 12, 45, 29), // 11 Dec 2023 12:45:29 -> Monday
    });

    const nowMs = new Date().getTime();

    const coupon: IProxyCourseCoupon = {
      dtStart: nowMs - 2000, // Assuming dtStart is 2 seconds ago
      dtEnd: nowMs - 1000, // Assuming dtEnd is 1 second ago
      dtCreated: nowMs - 2000, // Assuming dtCreated is 2 seconds ago
      saleCategory: SaleCategory.midDiscount,
    };

    const result = getCouponStatusInfo(coupon);
    expect(result.status).toBe(CouponStatus.expired);
  });

  test("should return CouponStatus.noYetValid when coupon is not yet valid", () => {
    // Mocking the current time to be before dtStart
    vi.useFakeTimers({
      toFake: ["Date"],
      now: new Date(2023, 11, 11, 12, 45, 29), // 11 Dec 2023 12:45:29 -> monday
    });

    const nowMs = new Date().getTime();

    const coupon: IProxyCourseCoupon = {
      dtStart: nowMs + 1000,
      dtEnd: nowMs + 2000,
      dtCreated: nowMs + 1000,
      saleCategory: SaleCategory.midDiscount,
    };

    const result = getCouponStatusInfo(coupon);
    expect(result.status).toBe(CouponStatus.noYetValid);
  });
});

describe("isDiscount", () => {
  test("should return true for midDiscount category", () => {
    const midDiscountCategory = SaleCategory.midDiscount;
    const result = isDiscount(midDiscountCategory);
    expect(result).toBe(true);
  });

  test("should return false for regular category", () => {
    const regularCategory = SaleCategory.regular;
    const result = isDiscount(regularCategory);
    expect(result).toBe(false);
  });

  test("should return false for other categories", () => {
    const otherCategory = "otherCategory" as SaleCategory;
    const result = isDiscount(otherCategory);
    expect(result).toBe(false);
  });
});

describe("getCourseUrl", () => {
  test("should throw an error for unexpected category", () => {
    const unexpectedCategory = "unexpectedCategory" as SaleCategory;
    const validCourseName = CourseName.BasisOfNext;

    expect(() =>
      getCourseUrl(unexpectedCategory, validCourseName)
    ).toThrowError(`unexpected category : ${unexpectedCategory}`);
  });

  test("should throw an error when courseUrl is not found for regular category", () => {
    const regularCategory = SaleCategory.regular;
    const nonExistentCourseName = "nonExistentCourse" as CourseName;

    expect(() =>
      getCourseUrl(regularCategory, nonExistentCourseName)
    ).toThrowError(
      `courseUrl was not found. category : ${regularCategory} , courseName : ${nonExistentCourseName}`
    );
  });

  test("should throw an error when courseUrl is not found for midDiscount category", () => {
    const midDiscountCategory = SaleCategory.midDiscount;
    const nonExistentCourseName = "nonExistentCourse" as CourseName;

    expect(() =>
      getCourseUrl(midDiscountCategory, nonExistentCourseName)
    ).toThrowError(
      `courseUrl was not found. category : ${midDiscountCategory} , courseName : ${nonExistentCourseName}`
    );
  });
});

describe("getCoursesFromSaleCatregory", () => {
  test("should throw an error for unexpected category", () => {
    const unexpectedCategory = "unexpectedCategory" as SaleCategory;

    expect(() => getCoursesFromSaleCatregory(unexpectedCategory)).toThrowError(
      `unexpected category : ${unexpectedCategory}`
    );
  });
});

describe("createRealtiveUrlPerSaleDay", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("should return the tab without discounts if it is not a sales day", () => {
    vi.useFakeTimers({
      toFake: ["Date"],
      now: new Date(2023, 11, 11, 12, 45, 29), // 11 Dec 2023 12:45:29 -> monday
    });

    const url = createRelativeUrlPerSaleDay();

    expect(url).toBe(`/${PageTabs.courses}`);
  });

  test("should return the tab with discounts if it is a sales day", () => {
    vi.useFakeTimers({
      toFake: ["Date"],
      now: new Date(2023, 11, 13, 12, 45, 29), // 13 Dec 2023 12:45:29 -> wednesday
    });

    const url = createRelativeUrlPerSaleDay();

    expect(url).toContain(`/${PageTabs.courses}/${PageNestedTabs.discounts}`);
  });

  test("should return the tab with valid coupon in sales day", () => {
    vi.useFakeTimers({
      toFake: ["Date"],
      now: new Date(2023, 11, 13, 12, 45, 29), // 13 Dec 2023 12:45:29 -> wednesday
    });

    const relativeUrlString = createRelativeUrlPerSaleDay();
    // --- dummy add valid url
    const url = new URL(`http://www.dummy.com${relativeUrlString}`);
    // Get the query string
    const queryString = url.search;
    const params = new URLSearchParams(queryString);
    const encrypted_coupon = params.get("encrypted_coupon");
    expect(encrypted_coupon).toBeTruthy();
    const coupon = decryptCoupon(encrypted_coupon!);
    const couponStatusInfo = getCouponStatusInfo(coupon);
    expect(couponStatusInfo.status).toBe(CouponStatus.validNow);
  });
});

import SaleCategory from "src/types/sales/e-sale-catgory";
import ICourse from "src/types/i-course";
import CourseName from "src/types/e-course-name";
import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";
import CouponStatus from "src/types/sales/e-coupon-status";
import ICouponStatusInfo from "src/types/sales/i-coupon-status-info";
import {
  coursesBase,
  coursesUrlMid,
  coursesUrlReg,
} from "data/onlines-courses";
import dayjs from "dayjs";
import PageTabs from "src/types/e-page-tabs";
import IEncryptedCoupon from "src/types/sales/i-encrypted-coupon";
import { createEncryptedCouponForToday } from "src/lib/server/coupon-crypto-utils";
import PageNestedTabs from "src/types/e-page-nested-tabs";
import { objectToQueryString } from "./gen/url-utils";

export function createRelativeUrlPerSaleDay(): string {
  let tab = `/${PageTabs.courses}`;

  if (isSalesDay()) {
    const enc: IEncryptedCoupon = {
      encrypted_coupon: createEncryptedCouponForToday(),
    };
    const queryString = objectToQueryString(enc);
    tab = `/${PageTabs.courses}/${PageNestedTabs.discounts}?${queryString}`;
  }
  return tab;
}

/**
 *
 * @returns currently sales day is fixed on wednesday
 */
export function isSalesDay(): boolean {
  const currentDayOfWeek = dayjs().day();

  // Check if today is Wednesday (3 corresponds to Wednesday)
  return currentDayOfWeek === 3;
}

export function isDiscount(category: SaleCategory): boolean {
  return category == SaleCategory.midDiscount;
}

export function getCouponStatusInfo(
  coupon: IProxyCourseCoupon | null
): ICouponStatusInfo {
  if (!coupon) return { status: CouponStatus.parseError };

  const currentTimeMillis = new Date().getTime();

  if (currentTimeMillis < coupon.dtStart)
    return { status: CouponStatus.noYetValid };

  const expireInMs = coupon.dtEnd - currentTimeMillis;
  if (expireInMs < 0) return { status: CouponStatus.expired };

  return {
    status: CouponStatus.validNow,
    expireInMs,
  };
}

export function getCourseUrl(
  category: SaleCategory,
  courseName: CourseName
): string {
  let courseUrl = undefined;

  switch (category) {
    case SaleCategory.regular:
      courseUrl = coursesUrlReg.get(courseName);
      break;

    case SaleCategory.midDiscount:
      courseUrl = coursesUrlMid.get(courseName);
      break;

    default:
      // --- will issue page 500 on non dev
      throw new Error(`unexpected category : ${category}`);
  }

  if (!courseUrl) {
    // --- will issue page 500 on non dev
    throw new Error(
      `courseUrl was not found. category : ${category} , courseName : ${courseName}`
    );
  }

  return courseUrl;
}

export function getCoursesFromCouponStatus(status: CouponStatus): ICourse[] {
  return status == CouponStatus.validNow
    ? getCoursesFromSaleCatregory(SaleCategory.midDiscount)
    : getCoursesFromSaleCatregory(SaleCategory.regular);
}

export function getCoursesFromSaleCatregory(category: SaleCategory): ICourse[] {
  const courses: ICourse[] = [];

  switch (category) {
    case SaleCategory.regular:
    case SaleCategory.midDiscount:
      coursesBase.forEach((courseBase) => {
        const course: ICourse = {
          ...courseBase,
          href: getCourseUrl(category, courseBase.courseName),
        };
        courses.push(course);
      });
      break;

    default:
      // --- will issue page 500 on non dev
      throw new Error(`unexpected category : ${category}`);
  }

  return courses;
}

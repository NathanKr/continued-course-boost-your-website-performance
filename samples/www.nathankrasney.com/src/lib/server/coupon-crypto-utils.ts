import dayjs from "dayjs";
import SaleCategory from "src/types/sales/e-sale-catgory";
import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";
import { encryptCoupon } from "./coupon-crypto";

export function getTodayStartAndEnd() {
  // Get the current date
  const today = dayjs();

  // Set the time to the beginning of the day (00:00:00)
  const dtStart = today.startOf("day").valueOf();

  // Set the time to the end of the day (23:59:59)
  const dtEnd = today.endOf("day").valueOf();

  // Get the current day in milliseconds since 1970
  const todayInMs = today.valueOf();

  return { dtStart, dtEnd, todayInMs };
}

export function createEncryptedCouponForToday(
  saleCategory: SaleCategory = SaleCategory.midDiscount
): string {
  const { dtStart, dtEnd, todayInMs } = getTodayStartAndEnd();
  const coupon: IProxyCourseCoupon = {
    dtStart,
    dtEnd,
    dtCreated: todayInMs,
    saleCategory,
  };
  return encryptCoupon(coupon);
}

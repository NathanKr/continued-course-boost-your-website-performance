import ICourse from "./i-course";
import ICouponStatusInfo from "./sales/i-coupon-status-info";

export interface IBaseCommonCourses {
  courses: ICourse[];
  couponStatusInfo?: ICouponStatusInfo;
}

export interface ICommonCourses extends IBaseCommonCourses {
  discount: boolean;
}

import CouponStatus from "./e-coupon-status";

interface ICouponStatusInfo{
    status : CouponStatus;
    expireInMs? : number; // relevant only if status is validNow
}

export default ICouponStatusInfo;
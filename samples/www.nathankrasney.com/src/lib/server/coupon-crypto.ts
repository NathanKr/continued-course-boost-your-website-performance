import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";
import {
  decodeAndDecryptObject,
  encryptAndEncodeObject,
  stringToBuffer,
} from "./symetric-crypto";

export const keyString: string = process.env.COUPON_CRYPTO_KEY!;
const key: Buffer = stringToBuffer(keyString);

export function encryptCoupon(coupon: IProxyCourseCoupon): string {
  return encryptAndEncodeObject(coupon, key);
}


export function decryptCoupon(
  encodedCoupon: string
): IProxyCourseCoupon | null {
  try {
    const obj: any = decodeAndDecryptObject(encodedCoupon, key);

    const coupon: IProxyCourseCoupon = {
      ...obj,
      dtStart: parseInt(obj.dtStart),
      dtEnd: parseInt(obj.dtEnd),
      dtCreated: parseInt(obj.dtCreated),
    };
    return coupon;
  } catch (err) {
    return null;
  }
}

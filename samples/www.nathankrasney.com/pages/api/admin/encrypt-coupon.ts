import { NextApiRequest, NextApiResponse } from "next";
import { encryptCoupon } from "src/lib/server/coupon-crypto";
import IEncryptedCoupon from "src/types/sales/i-encrypted-coupon";
import IProxyCourseCoupon from "src/types/sales/i-proxy-course-coupon";

// --- todo nath protect this (security)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // --- todo nath add zod validation

  const coupon: IProxyCourseCoupon = req.query as unknown as IProxyCourseCoupon;
  const couponEncryptrd: IEncryptedCoupon = {
    encrypted_coupon: encryptCoupon(coupon),
  };

  res.status(200).json(couponEncryptrd);
}

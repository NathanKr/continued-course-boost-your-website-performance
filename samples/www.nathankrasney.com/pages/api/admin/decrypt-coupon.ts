import { NextApiRequest, NextApiResponse } from "next";
import { decryptCoupon } from "src/lib/server/coupon-crypto";
import IEncryptedCoupon from "src/types/sales/i-encrypted-coupon";

// --- todo nath protect this (security)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // --- todo nath add zod validation
  const { encrypted_coupon } = req.query as unknown as IEncryptedCoupon;
  const coupon = decryptCoupon(encrypted_coupon);

  if (!coupon) {
    return res.status(500).json({});
  }

  res.status(200).json({ ...coupon });
}

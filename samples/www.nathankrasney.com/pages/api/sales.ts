import type { NextApiRequest, NextApiResponse } from "next";
import ISalesApi from "src/types/sales/i-sales-api";
import { millisecondsUntilEndOfDay } from "src/utils/server/gen/utils";
import {
  createRelativeUrlPerSaleDay,
  isSalesDay,
} from "src/utils/server/sales-mngr";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sales: ISalesApi = {
    isSalesDay: isSalesDay(),
    relativeUrlPerSaleDay: createRelativeUrlPerSaleDay(),
  };

  if (sales.isSalesDay) {
    sales.expireInMs = millisecondsUntilEndOfDay();
  }

  return res.status(200).json({ ...sales });
}

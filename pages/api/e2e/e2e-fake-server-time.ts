// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
/* 
 use this import otherwise i get error from react thinking useFakeTimers is a custom hook
*/
import sinon from "sinon";
import IServerFakeTime from "src/types/e2e/i-server-fake-time";
import { isProduction } from "src/utils/server/gen/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { serverFakeTimeMs } = req.body as IServerFakeTime;

    // -- we do not want this on production so protect production from mistakes ........
    const isLocalhost = req.headers.host?.includes("localhost");

    if (!isProduction() && isLocalhost) {
      sinon.restore(); // this is required otherwise you get an error on seting twice
      sinon.useFakeTimers({
        toFake: ["Date"],
        now: new Date(serverFakeTimeMs),
      });
    }

    res.status(200).json({ date: new Date() });
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
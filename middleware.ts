import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import InternalRelativeApi from "src/types/e-internal-relative-api";
import ISalesApi from "src/types/sales/i-sales-api";

export async function middleware(request: NextRequest) {
  /* --- relativeUrlPerSaleDay is 
    /courses/discounts?encrypted_coupon=xyz123.... on saleDay (only ?)
     or /courses on regular day
  */

  const url = `${request.nextUrl.origin}${InternalRelativeApi.sales}`;
  let sales: ISalesApi | null = null;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    sales = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const relativeUrlPerSaleDay = sales?.relativeUrlPerSaleDay ?? "";
  return NextResponse.redirect(new URL(relativeUrlPerSaleDay, request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/courses/arbitrator",
};

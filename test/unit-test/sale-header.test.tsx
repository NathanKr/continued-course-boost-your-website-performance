import { render } from "@testing-library/react";
import SaleHeader from "src/components/sale-header";
import CouponStatus from "src/types/sales/e-coupon-status";
import { test, expect } from "vitest";

test("renders correct title for parseError status", () => {
  const couponStatusInfo = { status: CouponStatus.parseError };
  const { getByText, queryByAltText } = render(
    <SaleHeader couponStatusInfo={couponStatusInfo} />
  );
  expect(getByText(/bad sale coupon/i)).toBeInTheDocument();
  // image
  expect(queryByAltText(/courses are on sale/i)).not.toBeInTheDocument();
});

test("renders correct title for expired status", () => {
  const couponStatusInfo = { status: CouponStatus.expired };
  const { getByText, queryByAltText } = render(
    <SaleHeader couponStatusInfo={couponStatusInfo} />
  );
  expect(getByText(/coupon has expied/i)).toBeInTheDocument();
  // image
  expect(queryByAltText(/courses are on sale/i)).not.toBeInTheDocument();
});

test("renders correct title for noYetValid status", () => {
  const couponStatusInfo = { status: CouponStatus.noYetValid };
  const { getByText, queryByAltText } = render(
    <SaleHeader couponStatusInfo={couponStatusInfo} />
  );
  expect(getByText(/coupon is not valid yet/i)).toBeInTheDocument();
  // image
  expect(queryByAltText(/courses are on sale/i)).not.toBeInTheDocument();
});

test("renders correct title and image for validNow status", () => {
  const couponStatusInfo = {
    status: CouponStatus.validNow,
    expireInMs: 3600000, // 1 hour in milliseconds
  };

  const { getByText, queryByAltText } = render(
    <SaleHeader couponStatusInfo={couponStatusInfo} />
  );

  expect(
    getByText(/All courses at 12.99\$ ==> Coupon Expires in 1h/i)
  ).toBeInTheDocument();
  // image
  // expect(queryByAltText(/courses are on sale/i)).toBeInTheDocument();
});

test("throws an error for unexpected coupon status", () => {
  const invalidCouponStatusInfo = {
    status: "invalidStatus" as CouponStatus, // Ensure it's of type CouponStatus
  };

  // Wrap the SaleHeader rendering in a function to catch the error
  const { getByText, queryByAltText } = render(
    <SaleHeader couponStatusInfo={invalidCouponStatusInfo} />
  );

  // Assert that rendering with an unexpected status throws an error
  expect(getByText(/Unexpected coupon status/i)).toBeInTheDocument();
  // image
  // expect(queryByAltText(/courses are on sale/i)).not.toBeInTheDocument();
});

import { render } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";
import Discounts, { getServerSideProps } from "pages/courses/discounts";
import { ParsedUrlQuery } from "querystring";
import CouponStatus from "src/types/sales/e-coupon-status";
import { test, expect, vi, afterEach } from "vitest";
import { coursesUrlMid, coursesUrlReg } from "data/onlines-courses";
import { IBaseCommonCourses } from "src/types/i-common-courses";

const NUM_COURSES = 8;

afterEach(() => {
  vi.useRealTimers();
});

test("getServerSideProps is called with empty query string", async () => {
  const query: ParsedUrlQuery = {};
  const context = {
    query,
  } as unknown as GetServerSidePropsContext;

  const { courses, couponStatusInfo } = (
    (await getServerSideProps(context)) as { props: IBaseCommonCourses }
  ).props;
  expect(courses.length).toBe(NUM_COURSES);
  expect(couponStatusInfo).toBeTruthy();
  expect(couponStatusInfo?.status).toBe(CouponStatus.parseError);
});

test("Discounts is called with empty query string --> regular courses used", async () => {
  const query: ParsedUrlQuery = {};
  const context = {
    query,
  } as unknown as GetServerSidePropsContext;

  const { courses, couponStatusInfo } = (
    (await getServerSideProps(context)) as { props: IBaseCommonCourses }
  ).props;

  const { getAllByRole } = render(
    <Discounts courses={courses} couponStatusInfo={couponStatusInfo} />
  );
  const anchorElementsWithRole = getAllByRole("link") as HTMLAnchorElement[];
  const len = coursesUrlReg.size;
  expect(len).toBe(NUM_COURSES);
  expect(anchorElementsWithRole.length).toBe(NUM_COURSES);

  let urlRegCourseFound = 0;
  coursesUrlReg.forEach((courseUrl, _) => {
    if (anchorElementsWithRole.find((elem) => elem.href == courseUrl)) {
      urlRegCourseFound++;
    }
  });
  expect(urlRegCourseFound).toBe(NUM_COURSES);
});

test("Discounts is called with valid coupon --> discount courses used", async () => {
  // --- caution : month  is zero based ,2023, 11, 11 is 11 - dec 2023
  vi.useFakeTimers({
    toFake: ["Date"],
    now: new Date(2023, 11, 11, 12, 45, 29), // -- this day is valid for the coupon
  });

  /*
      Coupon info :
      
      Start Date: 11.12.2023, 11:37:38
      End Date: 12.12.2023, 11:37:38
      Created Date: 11.12.2023, 11:37:38
  */

  const query: ParsedUrlQuery = {
    encrypted_coupon:
      "%7B%22iv%22%3A%22d500074ec0bcb9c3970951352c8b5f3b%22%2C%22encryptedData%22%3A%223218b28f9a3276ac757c444eb7104d134ed771292a1cc1e7365bd814cd26eab9d3fe65c4fc32f58423c7e0d3d3572c2cf47d7a94fae313b696ddb82b16004b009e32b718d03bf6b550177affd136b592737d3956f87365195333d3d09ffef00d992c687ad1a85adc7ebb0b7eff%22%2C%22tag%22%3A%22df892d26f91de3fbc0b021d5ac88c0ff%22%7D",
  };
  const context = {
    query,
  } as unknown as GetServerSidePropsContext;

  const { courses, couponStatusInfo } = (
    (await getServerSideProps(context)) as { props: IBaseCommonCourses }
  ).props;

  const { getAllByRole } = render(
    <Discounts courses={courses} couponStatusInfo={couponStatusInfo} />
  );
  const anchorElementsWithRole = getAllByRole("link") as HTMLAnchorElement[];
  const len = coursesUrlMid.size;
  expect(len).toBe(NUM_COURSES);
  expect(anchorElementsWithRole.length).toBe(NUM_COURSES);

  let urlMidCourseFound = 0;
  coursesUrlMid.forEach((courseUrl, _) => {
    if (anchorElementsWithRole.find((elem) => elem.href == courseUrl)) {
      urlMidCourseFound++;
    }
  });
  expect(urlMidCourseFound).toBe(NUM_COURSES);
});

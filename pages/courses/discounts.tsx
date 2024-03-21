import { GetServerSideProps, NextPage } from "next";
import CoursesCommon from "src/components/courses-common";
import IEncryptedCoupon from "src/types/sales/i-encrypted-coupon";
import { decryptCoupon } from "src/lib/server/coupon-crypto";
import {
  getCouponStatusInfo,
  getCoursesFromCouponStatus,
} from "src/utils/server/sales-mngr";
import { IBaseCommonCourses } from "src/types/i-common-courses";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // --- get encripted coupon
  const { encrypted_coupon } = context.query as unknown as IEncryptedCoupon;

  const coupon = decryptCoupon(encrypted_coupon);

  const props: IBaseCommonCourses = {
    courses: [],
    couponStatusInfo: getCouponStatusInfo(coupon),
  };

  if (props.couponStatusInfo?.status) {
    props.courses = getCoursesFromCouponStatus(props.couponStatusInfo.status);
  }

  return {
    props, // will be passed to the page component as props
  };
};

const Discounts: NextPage<IBaseCommonCourses> = ({
  couponStatusInfo,
  courses,
}) => {
  return (
    <CoursesCommon
      courses={courses}
      couponStatusInfo={couponStatusInfo}
      discount={true}
    />
  );
};

export default Discounts;

import React, { FC } from "react";
import CouponStatus from "src/types/sales/e-coupon-status";
import ICouponStatusInfo from "src/types/sales/i-coupon-status-info";
import { formatDuration } from "src/utils/client/utils";
import { MID_COURSE_PRICE_USD } from "src/utils/common/constants";
import styles from "styles/sale-header.module.css";

const FACTOR = 1;

interface IProps {
  couponStatusInfo: ICouponStatusInfo;
}

const REGULAR_PRICE_USED = ", regular courses prices are used";

const SaleHeader: FC<IProps> = ({ couponStatusInfo }) => {
  let titleText1, titleText2;

  switch (couponStatusInfo.status) {
    case CouponStatus.parseError:
      titleText1 = `Bad sale coupon ${REGULAR_PRICE_USED}`;
      break;

    case CouponStatus.expired:
      titleText1 = `Coupon has expied ${REGULAR_PRICE_USED}`;
      break;

    case CouponStatus.noYetValid:
      titleText1 = `Coupon is not valid yet ${REGULAR_PRICE_USED}`;
      break;

    case CouponStatus.validNow:
      titleText1 = `All courses at ${MID_COURSE_PRICE_USD}\$ ==> Coupon Expires in ${formatDuration(
        couponStatusInfo.expireInMs!
      )}`;
      titleText2 = "24-Hour Flash Sale";
      break;

    default:
      titleText1 = `Unexpected coupon status ${REGULAR_PRICE_USED}`;
      console.error(`couponStatusInfo.status : ${couponStatusInfo.status}`);
  }

  const elemTitle = (
    <>
      <h2>{titleText1}</h2>
      <h2>{titleText2}</h2>
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.sale_title}>{elemTitle}</div>
    </div>
  );
};

export default SaleHeader;

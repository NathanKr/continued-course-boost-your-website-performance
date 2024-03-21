import stylesCourses from "styles/courses.module.css";
import stylesCoursesData from "styles/courses-data.module.css";
import Head from "next/head";
import Image from "next/image";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import { FC } from "react";
import SaleHeader from "./sale-header";
import { ICommonCourses } from "src/types/i-common-courses";

const IMAGE_WIDTH_PX = 352;
const IMAGE_HEIGHT_PX = 198;

// --- todo nath : should CoursesHelper return NextPage or FC
const CoursesCommon: FC<ICommonCourses> = ({
  courses,
  discount,
  couponStatusInfo,
}) => {
  const { curLang, directionStyle } = getLang();

  const onlineCourses = courses.map((course, index) => (
    <div key={index} className={stylesCoursesData.courseOnline}>
      <div className={stylesCoursesData.course_img}>
        <Image
          src={course.imgSrc}
          alt={course.courseName}
          width={IMAGE_WIDTH_PX}
          height={IMAGE_HEIGHT_PX}
          priority={index == 0 ? true : false}
        />
        {/* use target="_blank" so navigate will not be instead of courses tab */}
        <a
          href={course.href}
          target="_blank"
          className={stylesCoursesData.course_btn_enroll}
        >
          Enroll
        </a>
      </div>
      <div className={stylesCoursesData.course_name_text}>
        <h3>{course.courseName}</h3>
      </div>
    </div>
  ));

  let elemSaleHeader;
  if (discount && couponStatusInfo) {
    elemSaleHeader = <SaleHeader couponStatusInfo={couponStatusInfo} />;
  }

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_courses)}</title>
        <meta name="description" content={curLang.courses_head_description} />
      </Head>
      <div className={stylesCourses.Courses}>
        <h2 className={stylesCourses.Courses_online_title}>
          {curLang.courses_online_courses_heading}
        </h2>
        {elemSaleHeader}
        <div
          style={directionStyle}
          className={stylesCourses.Courses_main_container}
        >
          {onlineCourses}
        </div>
      </div>
    </>
  );
};

export default CoursesCommon;

// --- todo nath used .. because otherwise vitest not working
import CourseName from "src/types/e-course-name";
import { ICourseBase } from "src/types/i-course";

export const coursesUrlMid: Map<CourseName, string> = new Map();
/**
 * Change create new coupons and change here every 1 day of the month
 */
coursesUrlMid.set(
  CourseName.RealWorldTsUnitTesting,
  "https://www.udemy.com/course/real-world-typescript-unit-testing/?couponCode=700FD507FD6E32BCC44C"
);
coursesUrlMid.set(
  CourseName.DeployToDo,
  "https://www.udemy.com/course/deploy-your-node-express-app-to-the-cloud/?couponCode=C02D3D93E99EC77D15B0"
);
coursesUrlMid.set(
  CourseName.LearnReactHooks,
  "https://www.udemy.com/course/learn-react-hooks-in-a-better-way/?couponCode=026B11A38EDC7A8ADB91"
);
coursesUrlMid.set(
  CourseName.LearnReact,
  "https://www.udemy.com/course/learn-react-in-a-better-way/?couponCode=DFAC5F80FDC83530EFD5"
);

/**
 * This is _NOT_ changing because in podia you can use unlimited coupon
 */
coursesUrlMid.set(
  CourseName.MigrateReactToNext,
  "https://nathankrasney.podia.com/migrate-react-app-to-next-js-app?coupon=MIGRATE-REACT-2-NEXT-12-99-NO-LIMIT"
);
coursesUrlMid.set(
  CourseName.BasisOfNext,
  "https://nathankrasney.podia.com/next-js?coupon=NEXTJS-12-99-NO-LIMIT"
);
coursesUrlMid.set(
  CourseName.TsWithApp,
  "https://nathankrasney.podia.com/c1d067c7-ebfc-4e02-b960-4641ba3aac1b?coupon=TS-APP-12-99-NO-LIMIT"
);
coursesUrlMid.set(
  CourseName.TsWithReactApp,
  "https://nathankrasney.podia.com/33db1adf-6609-4bd3-a33a-92fb2d9fa43e?coupon=TS-REACT-12-99-NO-LIMIT"
);

/**
 * This is _NOT_ changing
 */
export const coursesUrlReg: Map<CourseName, string> = new Map();

coursesUrlReg.set(
  CourseName.RealWorldTsUnitTesting,
  "https://www.udemy.com/course/real-world-typescript-unit-testing/?referralCode=6B35B93853BC00B58172"
);
coursesUrlReg.set(
  CourseName.DeployToDo,
  "https://www.udemy.com/course/deploy-your-node-express-app-to-the-cloud/?referralCode=69772F332A34A0921636"
);

coursesUrlReg.set(
  CourseName.MigrateReactToNext,
  "https://nathankrasney.podia.com/migrate-react-app-to-next-js-app"
);
coursesUrlReg.set(
  CourseName.BasisOfNext,
  "https://nathankrasney.podia.com/next-js"
);
coursesUrlReg.set(
  CourseName.TsWithApp,
  "https://nathankrasney.podia.com/c1d067c7-ebfc-4e02-b960-4641ba3aac1b?coupon=UOW7NQB"
);
coursesUrlReg.set(
  CourseName.TsWithReactApp,
  "https://nathankrasney.podia.com/33db1adf-6609-4bd3-a33a-92fb2d9fa43e"
);
coursesUrlReg.set(
  CourseName.LearnReact,
  "https://www.udemy.com/course/learn-react-in-a-better-way/?referralCode=4299350292063C517597"
);
coursesUrlReg.set(
  CourseName.LearnReactHooks,
  "https://www.udemy.com/course/learn-react-hooks-in-a-better-way/?referralCode=B2E5AC5DE2762AB8A667"
);

/**
 * This is not changing
 */
export const coursesBase: ICourseBase[] = [
  {
    courseName: CourseName.RealWorldTsUnitTesting,
    imgSrc: "/images/courses/ts-unit-test.webp",
  },
  {
    courseName: CourseName.DeployToDo,
    imgSrc: "/images/courses/deploy-app.webp",
  },
  {
    courseName: CourseName.MigrateReactToNext,
    imgSrc: "/images/courses/migrate-react-to-next.js-352w-198w.webp",
  },
  {
    courseName: CourseName.BasisOfNext,
    imgSrc: "/images/courses/white-nextjs-352w-198w.webp",
  },
  {
    courseName: CourseName.TsWithApp,
    imgSrc: "/images/courses/tsapp-352w-198w.webp",
  },
  {
    courseName: CourseName.TsWithReactApp,
    imgSrc: "/images/courses/react-and-ts-new.webp",
  },
  {
    courseName: CourseName.LearnReact,
    imgSrc: "/images/courses/learn-react.webp",
  },
  {
    courseName: CourseName.LearnReactHooks,
    imgSrc: "/images/courses/react-hooks-img.webp",
  },
];

import { GetStaticProps, NextPage } from "next";
import SaleCategory from "src/types/sales/e-sale-catgory";
import ICourse from "src/types/i-course";
import { getCoursesFromSaleCatregory } from "src/utils/server/sales-mngr";
import CoursesCommon from "src/components/courses-common";

export interface IProps {
  courses: ICourse[];
}

export const getStaticProps: GetStaticProps = async () => {
  const courses: ICourse[] = await getCoursesFromSaleCatregory(
    SaleCategory.regular
  );

  let props: IProps = {
    courses,
  };

  return {
    props, // will be passed to the page component as props
  };
};

const Courses: NextPage<IProps> = ({ courses }) => {
  return <CoursesCommon courses={courses} discount={false} />;
};

export default Courses;

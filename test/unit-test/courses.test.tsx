import Courses, { IProps, getStaticProps } from "pages/courses";
import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPropsContext } from "next";
import { coursesUrlReg } from "data/onlines-courses";

const NUM_COURSES = 8;

test("Courses is called --> regular courses used", async () => {
  const query: ParsedUrlQuery = {};
  const context = {
    query,
  } as unknown as GetStaticPropsContext;
  const { courses } = ((await getStaticProps(context)) as { props: IProps })
    .props;

  const { getAllByRole } = render(<Courses courses={courses} />);
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

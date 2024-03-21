import CourseName from "./e-course-name";

export interface ICourseBase{
    courseName: CourseName;
    imgSrc: string;
}

export default interface ICourse extends ICourseBase{
    href : string;
}
import SaleCategory from "./e-sale-catgory";

export default interface IProxyCourseCoupon{
    dtStart: number; // ms from 1970
    dtEnd: number; // ms from 1970
    dtCreated: number; // ms from 1970 , can be served as id
    saleCategory : SaleCategory;
    // courseName : [CourseName] currently relevant to all
}
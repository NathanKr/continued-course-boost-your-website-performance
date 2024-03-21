import ILangKeyValue from "./lang/i-lang-key-value";

export default interface ITestemonial {
  testimonial_category: string;
  img_src: string;
  name: ILangKeyValue;
  widthPx: number;
  heightPx: number;
  job?: ILangKeyValue;
  desc?: ILangKeyValue;
  href?: string;
}

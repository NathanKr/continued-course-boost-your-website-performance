import { ILang } from "./i-lang";

export default interface IUseLang {
  locale: string | undefined;
  curLang: ILang;
  textAlignStyle: { textAlign: "right" | "left" };
  directionStyle: { direction: "rtl" | "ltr" };
}

import Lang from "src/types/lang/e-lang";
import { ILang } from "src/types/lang/i-lang";
import en from "data/locales/en";
import IUseLang from "src/types/lang/i-use-lang";
import { getDirection, getTextAlign } from "src/components/utils";

export function getLangObject(locale: Lang): ILang {
  // return locale == Lang.Heb ? he : en;
  return en;
}

export function getHeadTitle(lang: ILang, pageName: string) {
  return `${pageName} | ${lang.gen_nathan_krasney} | ${lang.gen_online_courses} `;
}

export function getLang(): IUseLang {
  const locale = "en";
  const curLang: ILang = getLangObject(locale as Lang);
  const textAlignStyle = { textAlign: getTextAlign(locale as Lang) };
  const directionStyle = { direction: getDirection(locale as Lang) };
  return { locale, curLang, textAlignStyle, directionStyle };
}

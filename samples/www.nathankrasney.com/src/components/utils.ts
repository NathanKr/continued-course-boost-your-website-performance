import Lang from "src/types/lang/e-lang";

export function getTextAlign(lang: Lang): "right" | "left" {
  return lang == Lang.Eng ? "left" : "right";
}

export function getDirection(lang: Lang): "rtl" | "ltr" {
  return lang == Lang.Eng ? "ltr" : "rtl";
}

export function getTextAlignStyle(lang: Lang) {
  return { textAlign: lang == Lang.Eng ? "left" : "right" };
}

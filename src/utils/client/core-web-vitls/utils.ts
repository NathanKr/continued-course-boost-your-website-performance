import { CSSProperties } from "react";
import IImageWithAspectRatioVariableParentWidth from "src/types/core-web-vitls/i-image-with-aspect-ratio-variable-parent-width";

export function getVariableParentStyle(
  info: IImageWithAspectRatioVariableParentWidth
): CSSProperties {
  const { parentMaxWidthPx, aspectRatio } = info;

  const parentStyle: CSSProperties = {
    maxWidth: `${parentMaxWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  };

  return parentStyle;
}
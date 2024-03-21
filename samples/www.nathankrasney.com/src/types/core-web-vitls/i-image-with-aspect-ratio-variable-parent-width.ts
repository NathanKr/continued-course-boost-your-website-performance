// --- interface for img html element and

import IBaseImageWithAspectRatio from "./i-base-image-with-aspect-ratio";

export default interface IImageWithAspectRatioVariableParentWidth
  extends IBaseImageWithAspectRatio {
  parentMaxWidthPx: number;
}

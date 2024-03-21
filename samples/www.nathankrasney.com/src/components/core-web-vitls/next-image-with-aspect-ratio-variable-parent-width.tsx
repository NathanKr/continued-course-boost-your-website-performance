import Image from "next/image";
import { FC } from "react";
import IImageWithAspectRatioVariableParentWidth from "src/types/core-web-vitls/i-image-with-aspect-ratio-variable-parent-width";
import { getVariableParentStyle } from "src/utils/client/core-web-vitls/utils";

interface IProps {
  info: IImageWithAspectRatioVariableParentWidth;
  priority?: boolean; // -- todo nath put inside info
}

const NextImageWithAspectRatioVariableParentWidth: FC<IProps> = ({
  info,
  priority,
}) => {
  const { imgSrc, title } = info;
  const parentStyle = getVariableParentStyle(info);

  return (
    <div style={parentStyle}>
      <Image
        src={`${imgSrc}`}
        alt={title}
        fill={true}
        priority={priority && true}
      />
    </div>
  );
};

export default NextImageWithAspectRatioVariableParentWidth;

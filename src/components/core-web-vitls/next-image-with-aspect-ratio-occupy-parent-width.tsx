import { CSSProperties, FC } from "react";
import IBaseImageWithAspectRatio from "src/types/core-web-vitls/i-base-image-with-aspect-ratio";
import Image from "next/image";

interface IProps {
  baseInfo: IBaseImageWithAspectRatio;
  priority?: boolean; // -- todo nath put inside info
}

const NextImageWithAspectRatioOccupyParentWidth: FC<IProps> = ({
  baseInfo,
  priority,
}) => {
  const { imgSrc, title, aspectRatio } = baseInfo;
  const paddingTopPercentage = `${(100 * 1) / aspectRatio}%`;

  const parentStyle: CSSProperties = {
    width: "100%",
    position: "relative",
    paddingTop: paddingTopPercentage,
  };

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

export default NextImageWithAspectRatioOccupyParentWidth;

import styles from "styles/event.module.css";
import { FC } from "react";
import { IEventWithPriority } from "src/types/i-event";
import Image from "next/image";
import stylesLink from "styles/gen-ui/link-no-default-underline.module.css";
import { getLang } from "src/utils/client/lang-utils";
import EventType from "src/types/e-event-type";

const eventPagePic = "/images/event-page-pic.webp";
const WIDTH_ORIG_PX = 1920;
const HEIGHT_ORIG_PX = 1280;
const IMAGE_FACTOR = 8;

interface IProps {
  event: IEventWithPriority;
}

const Event: FC<IProps> = ({ event }) => {
  const { startDt, title, desc, location, url, imgPriority, type } = event;
  const { curLang, textAlignStyle, directionStyle } = getLang();
  const styleDesc = {
    ...textAlignStyle,
    ...directionStyle,
  };

  const dateTimeElem = startDt && (
    <div style={styleDesc} className={styles.Event_img_inner_container}>
      <p className={styles.Event_date}>{startDt}</p>
    </div>
  );
  const urlElem = url && (
    <a className={stylesLink.LinkNoDefaultUnderline} href={url.href}>
      {url.text}
    </a>
  );
  const locationElem = location && (
    <small>
      {curLang.event_location} : {location}
    </small>
  );

  const saleClassName =
    event.type == EventType.flashSale24hr ? styles.sale_text : "";

  return (
    <div className={styles.Event}>
      <div className={styles.Event_img_container}>
        <Image
          width={WIDTH_ORIG_PX / IMAGE_FACTOR}
          height={HEIGHT_ORIG_PX / IMAGE_FACTOR}
          src={eventPagePic}
          alt={title}
          className={styles.Event_img}
          priority={imgPriority}
        />
        {dateTimeElem}
      </div>

      <div style={styleDesc} className={styles.Event_desc_container}>
        <h3 className={`${styles.Event_name} ${saleClassName}`}>{title}</h3>
        {urlElem}
        <p className={`${styles.Event_desc} ${saleClassName}`}>{desc}</p>
        {locationElem}
      </div>
    </div>
  );
};

export default Event;

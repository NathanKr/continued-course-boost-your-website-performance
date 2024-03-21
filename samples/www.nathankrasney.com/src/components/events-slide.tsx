import { FC } from "react";
import EventType from "src/types/e-event-type";
import IEvent from "src/types/i-event";
import { filterEvents } from "src/utils/client/event-utils";
import styles from "styles/events-slide.module.css";
import stylesLink from "styles/gen-ui/link-no-default-underline.module.css";

interface IProps {
  events: IEvent[];
  isSaleDay: boolean;
}

const EventsSlide: FC<IProps> = ({ events, isSaleDay }) => {
  const filteredEvents = filterEvents(events, isSaleDay);

  return (
    <div className={styles.EventsSlide}>
      <div className={styles.EventsSlide_container}>
        {filteredEvents
          ? filteredEvents.map((eventS, index) => {
              const urlElem = eventS.url && (
                <a
                  className={stylesLink.LinkNoDefaultUnderline}
                  href={eventS.url.href}
                >
                  {eventS.url.text}
                </a>
              );
              const dateElem = eventS.startDt && (
                <p className={styles.EventsSlide_date}>{eventS.startDt}</p>
              );
              let classNameTitle = styles.EventsSlide_name;
              if (eventS.type == EventType.flashSale24hr) {
                classNameTitle += ` ${styles.sale_title}`;
              }

              return (
                <div key={index} className={styles.EventsSlide_text}>
                  <p className={classNameTitle}>{eventS.title}</p>
                  {urlElem}
                  {dateElem}
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default EventsSlide;



import Event from "src/components/event";
import styles from "styles/events.module.css";
import IEvent, { IEventWithPriority } from "src/types/i-event";
import Head from "next/head";
import { getEvents } from "src/utils/server/utils";
import { NextPage } from "next";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import { queryKeyFetchIsSaleDay } from "src/utils/client/constants";
import { useQuery } from "@tanstack/react-query";
import { filterEvents, getFromReactQuery } from "src/utils/client/event-utils";

interface IProps {
  events: IEvent[];
}

export function getStaticProps() {
  let props: IProps = { events: [] };

  props.events = getEvents();

  return {
    props, // will be passed to the page component as props
  };
}

const queryKey = [queryKeyFetchIsSaleDay];

const Events: NextPage<IProps> = ({ events }) => {
  const { data } = useQuery({
    queryKey,
  });

  let isSaleDay = getFromReactQuery(data);

  const { curLang, directionStyle } = getLang();
  const filteredEvents = filterEvents(events, isSaleDay);

  const elements = filteredEvents.map((item, index) => {
    const event: IEventWithPriority = {
      type: item.type,
      startDt: item.startDt,
      title: item.title,
      desc: item.desc,
      location: item.location,
      url: item.url ? { href: item.url.href, text: item.url.text } : undefined,
      imgPriority: index == 0,
    };
    return <Event event={event} key={index} />;
  });

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_events)}</title>
        <meta name="description" content={curLang.events_head_description} />
      </Head>
      <div className={styles.Events}>
        <h2 className={styles.Events_title}>{curLang.events_title}</h2>
        <div style={directionStyle} className={styles.Events_container}>
          {elements}
        </div>
      </div>
    </>
  );
};

export default Events;

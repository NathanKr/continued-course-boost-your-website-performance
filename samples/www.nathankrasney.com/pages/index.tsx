import type { NextPage } from "next";
import Head from "next/head";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import { getEvents } from "src/utils/server/utils";
import IEvent from "src/types/i-event";
import styles from "styles/home.module.css";
import { useQuery } from "@tanstack/react-query";
import { queryKeyFetchIsSaleDay } from "src/utils/client/constants";
import EventsSlide from "src/components/events-slide";
import { getFromReactQuery } from "src/utils/client/event-utils";
import IBaseImageWithAspectRatio from "src/types/core-web-vitls/i-base-image-with-aspect-ratio";
import Image from "next/image";

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

const Home: NextPage<IProps> = ({ events }) => {
  const { data } = useQuery({
    queryKey,
  });
  const { curLang, textAlignStyle, directionStyle } = getLang();
  const style = { ...textAlignStyle, ...directionStyle };
  let isSaleDay = getFromReactQuery(data);

  const baseInfo: IBaseImageWithAspectRatio = {
    aspectRatio: 1920 / 1280,
    imgSrc: "/images/main-pic-2.webp",
    title: "Nathan Krasney Home Page Background",
  };

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_home)}</title>
        <meta name="description" content={curLang.home_head_description} />
      </Head>
      <div className={styles.Home}>
        <EventsSlide events={events} isSaleDay={isSaleDay} />
        <div style={style} className={styles.Home_primary}>
          <h2 className={styles.Home_text}>{curLang.gen_online_courses}</h2>
          <div className={styles.Home_red_bar}></div>
        </div>
      </div>
    </>
  );
};

export default Home;

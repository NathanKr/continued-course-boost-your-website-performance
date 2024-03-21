import { NextPage } from "next";
import Head from "next/head";
import MailchimpSubscribe from "src/components/mailchimp-subscribe";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import styles from "styles/newsletter.module.css";
import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

const Newsletter: NextPage = () => {
  const { curLang } = getLang();

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_newsletter)}</title>
        <meta name="description" content={curLang.newletter_head_description} />
      </Head>

      <div className={`${styles.container} ${libre.className}`}>
        <div className={styles.newsletter}>
          <h2>Join the Newsletter of Nathan Krasney</h2>
          <h3 className={styles.subtitle}>
            Subscribe and get monthly email newsletter with posts , videos ,
            code samples , news , meetup meetings and course announcment about
            react , next.js , typescript , unit testing , deployment and
            performance
          </h3>
          <MailchimpSubscribe />
        </div>
      </div>
    </>
  );
};

export default Newsletter;

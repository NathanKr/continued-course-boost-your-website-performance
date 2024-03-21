import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import styles from "styles/contact.module.css";
import mailIcon from "../public/icons/mail.png";
import JoinMyNewsletter from "src/components/join-my-newsletter";
import { CONTACT_EMAIL } from "src/utils/common/constants";
import GenericClipboard from "src/components/gen-ui/generic-clipboard";

const textToCopy = "nathan@nathankrasney.com";
const EMAIL_ICON_WIDTH = 64;
const EMAIL_ICON_HEIGHT = 64;

const Contact: NextPage = () => {
  const { curLang } = getLang();

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_contact)}</title>
        <meta name="description" content={curLang.contact_head_description} />
      </Head>
      <div className={styles.Contact}>
        <div className={styles.Contact_container}>
          <div className={styles.Contact_img_container}>
            <Image
              src={mailIcon}
              alt="Nathan Krasney's Email Icon"
              className={styles.Contact_img}
              priority={true}
              width={EMAIL_ICON_WIDTH}
              height={EMAIL_ICON_HEIGHT}
            />
          </div>

          <div className={styles.Contact_info_container}>
            <GenericClipboard valueCopiedToClipboard={textToCopy}>
              {(onClick) => (
                <h2
                  onClick={onClick}
                  className={`${styles.Contact_info}`}
                  title="This is my contact , send me an email and ask me a question"
                >
                  Email :
                  <span className={styles.Contact_email}>{CONTACT_EMAIL}</span>
                </h2>
              )}
            </GenericClipboard>
            {/* <GenericClipboard valueCopiedToClipboard={textToCopy}>
              <h2
                className={`${styles.Contact_info}`}
                title="This is my contact , send me an email and ask me a question"
              >
                Email :
                <span className={styles.Contact_email}>{CONTACT_EMAIL}</span>
              </h2>
            </GenericClipboard> */}

            <JoinMyNewsletter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

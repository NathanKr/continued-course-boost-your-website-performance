import Image from "next/image";
import { getLangObject } from "src/utils/client/lang-utils";
import Lang from "src/types/lang/e-lang";
import { ILang } from "src/types/lang/i-lang";
import styles from "styles/footer.module.css";

const udemy = "/icons/udemy-icon.png",
  udemyText = "Nathan Krasney's Udemy Instructor Profile";

const github = "/icons/github.png",
  githubText = "Nathan Krasney's Github Account";

const youtube = "/icons/youtube.png",
  youtubeText = "Nathan Krasney's YouTube Channel";

const linkedin = "/icons/linkedin-logo.png",
  linkedinText = "Nathan Krasney's LinkedIn Profile";

const meetup = "/icons/meetup.png",
  meetupText = "Nathan Krasney's 'Learn React Israel' Meetup Group";

const iconWidthPx = 32;
const iconHeightPx = 32;

const Footer = () => {
  const locale = "en";
  const curLang: ILang = getLangObject(locale as Lang);

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_rights}>
        © 2020-2024 NATHAN KRASNEY. {curLang.footer_all_right_reserved}.
      </div>
      <div className={styles.Footer_icons}>
        <a href="https://github.com/NathanKr">
          <Image
            width={iconWidthPx}
            height={iconHeightPx}
            src={github}
            alt={githubText}
            className={styles.fa_icon}
            title={githubText}
          />
        </a>
        <a href="https://www.linkedin.com/in/nathankrasney">
          <Image
            width={iconWidthPx}
            height={iconHeightPx}
            src={linkedin}
            alt={linkedinText}
            title={linkedinText}
            className={styles.fa_icon}
          />
        </a>
        <a href="https://www.youtube.com/channel/UChOjjkqtxDPixwU7IFC1YHw">
          <Image
            width={iconWidthPx}
            height={iconHeightPx}
            src={youtube}
            alt={youtubeText}
            className={styles.fa_icon}
            title={youtubeText}
          />
        </a>
        <a href="https://www.udemy.com/user/nathan-krasney/">
          <Image
            width={iconWidthPx}
            height={iconHeightPx}
            src={udemy}
            alt={udemyText}
            className={styles.fa_icon}
            title={udemyText}
          />
        </a>
        <a href="https://www.meetup.com/learn-react-israel/">
          <Image
            width={iconWidthPx}
            height={iconHeightPx}
            src={meetup}
            alt={meetupText}
            className={styles.fa_icon}
            title={meetupText}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

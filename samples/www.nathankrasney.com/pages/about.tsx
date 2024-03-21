import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import styles from "styles/about.module.css";

const nathanProfile = "/images/about/nathan-profile.webp";
const nathanStandPic = "/images/about/nathan-stand-pic.webp";
const nathanStandPic2 = "/images/about/nathan-stand-peoples.webp";
const present = "/images/about/present.webp";
const nathanProfile2 = "/images/about/nathan-profile-wall.webp";

const BIG_FACTOR = 2;
const IMAGE_BIG_ORIG_WIDTH_PX = 1068;
const IMAGE_BIG_ORIG_HEIGHT_PX = 712;

const IMAGE_SMALL_IMAGE_WIDTH_PX = 300;
const IMAGE_SMALL_IMAGE_HEIGHT_PX = 240;

const About: NextPage = () => {
  const { curLang, textAlignStyle, directionStyle } = getLang();
  const styleDesc = {
    ...textAlignStyle,
    ...directionStyle,
    marginRight: "1.5rem",
  };

  const elemPAbout = (
    <>
      <p>{curLang.about_body_1}</p>
      <p>{curLang.about_body_2}</p>
      <p>{curLang.about_body_3}</p>
      <p>{curLang.about_body_4}</p>
      <p>{curLang.about_body_5}</p>
    </>
  );

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_about)}</title>
        <meta name="description" content={curLang.about_head_description} />
      </Head>

      <div className={styles.About}>
        <div className={styles.About_img}>
          <Image
            width={IMAGE_BIG_ORIG_WIDTH_PX / BIG_FACTOR}
            height={IMAGE_BIG_ORIG_HEIGHT_PX / BIG_FACTOR}
            src={nathanProfile}
            /*  --- load immidiately because i got 
                --- Largest Contentful Paint image was lazily loaded
            */
            priority={true}
            alt="Nathan Krasney"
          />
        </div>

        <div className={styles.About_description}>
          <div style={styleDesc}>
            <h2 className={styles.About_description_title}>
              {curLang.gen_nathan_krasney}
            </h2>
            <h3 className={styles.About_description_subtitle}>
              {curLang.about_heading}
            </h3>
            <div className={styles.About_description_details}>{elemPAbout}</div>
          </div>

          <div className={styles.About_description_images}>
            <div className={styles.About_description_img_1}>
              <Image
                width={IMAGE_SMALL_IMAGE_WIDTH_PX}
                height={IMAGE_SMALL_IMAGE_HEIGHT_PX}
                src={nathanStandPic}
                alt="Nathan Krasney"
              />
            </div>
            <div className={styles.About_description_img_1}>
              <Image
                width={IMAGE_SMALL_IMAGE_WIDTH_PX}
                height={IMAGE_SMALL_IMAGE_HEIGHT_PX}
                src={present}
                alt="Nathan Krasney"
              />
            </div>
            <div className={styles.About_description_img_1}>
              <Image
                width={IMAGE_SMALL_IMAGE_WIDTH_PX}
                height={IMAGE_SMALL_IMAGE_HEIGHT_PX}
                src={nathanStandPic2}
                alt="Nathan Krasney"
              />
            </div>
            <div className={styles.About_description_img_1}>
              <Image
                width={IMAGE_SMALL_IMAGE_WIDTH_PX}
                height={IMAGE_SMALL_IMAGE_HEIGHT_PX}
                src={nathanProfile2}
                alt="Nathan Krasney"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

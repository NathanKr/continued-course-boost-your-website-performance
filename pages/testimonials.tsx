import styles from "styles/testimonials.module.css";

import ITestemonial from "src/types/i-testemonial";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { getTestimonials } from "src/utils/server/utils";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import Lang from "src/types/lang/e-lang";
import NextImageWithAspectRatioOccupyParentWidth from "src/components/core-web-vitls/next-image-with-aspect-ratio-occupy-parent-width";
import IBaseImageWithAspectRatio from "src/types/core-web-vitls/i-base-image-with-aspect-ratio";

// --- for testimonial two is enough
const TESTIMONIAL_CATEGORY_STUDENT = "Student";
const TESTIMONIAL_CATEGORY_ORGANIZATION = "Organization";

interface IProps {
  testemonials: ITestemonial[];
}

export async function getStaticProps() {
  let props: IProps = { testemonials: [] };

  props.testemonials = getTestimonials();

  return {
    props, // will be passed to the page component as props
  };
}

const Testimonials: NextPage<IProps> = ({ testemonials }) => {
  const { curLang, locale, directionStyle } = getLang();
  const localeAsLang = locale as Lang;

  const items = testemonials.map((item, index) => {
    let elem;

    if (item.testimonial_category === TESTIMONIAL_CATEGORY_STUDENT) {
      elem = (
        <>
          <div
            style={directionStyle}
            className={styles.Testimonials_inner_container_img}
          >
            <a href={item.href}>
              <Image
                src={item.img_src}
                alt={item.name[localeAsLang]}
                className={styles.Testimonials_inner_img}
                width={item.widthPx}
                height={item.heightPx}
              />
            </a>
            <h3 className={styles.Testimonials_inner_name}>
              {item.name[localeAsLang]}
            </h3>
            <small className={styles.Testimonials_inner_job}>
              {item.job ? item.job[localeAsLang] : ""}
            </small>
          </div>

          <p style={directionStyle} className={styles.Testimonials_inner_desc}>
            {item.desc ? item.desc[localeAsLang] : ""}
          </p>
        </>
      );
    } else if (
      item.testimonial_category === TESTIMONIAL_CATEGORY_ORGANIZATION
    ) {
      const aspectRatio = item.widthPx / item.heightPx;

      const baseInfo: IBaseImageWithAspectRatio = {
        aspectRatio,
        imgSrc: item.img_src,
        title: item.name[localeAsLang],
      };
      elem = (
        <>
          <h3 style={directionStyle} className={styles.Testimonials_inner_name}>
            {item.name[localeAsLang]}
          </h3>
          <NextImageWithAspectRatioOccupyParentWidth baseInfo={baseInfo} />
        </>
      );
    }
    return (
      <div key={index} className={styles.Testimonials_container}>
        <div className={styles.Testimonials_inner_container}>{elem}</div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_testimonials)}</title>
        <meta
          name="description"
          content={curLang.testimonials_head_description}
        />
      </Head>

      <div className={styles.Testimonials}>
        <h2 className={styles.Testimonials_title}>
          {curLang.testimonials_title}
        </h2>
        {items}
      </div>
    </>
  );
};

export default Testimonials;

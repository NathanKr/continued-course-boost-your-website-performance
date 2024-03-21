import { NextPage } from "next";
import Head from "next/head";
import styles from "styles/quiz.module.css";
import stylesLink1 from "styles/gen-ui/link-no-default-underline.module.css";
import stylesLink from "styles/gen-ui/link.module.css";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";

const Quiz: NextPage = () => {
  const { curLang, textAlignStyle, directionStyle } = getLang();
  const styleLang = { ...textAlignStyle, ...directionStyle };

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_quiz)}</title>
        <meta name="description" content={curLang.quiz_head_description} />
      </Head>
      <div className={styles.Quiz}>
        <div style={styleLang} className={styles.Quiz_container}>
          {curLang.quiz_header}
          <ul>
            <li>{curLang.quiz_usecase_1}</li>
            <li>{curLang.quiz_usecase_2}</li>
            <li>{curLang.quiz_usecase_3}</li>
          </ul>
          {curLang.quiz_bottom}
          <a
            style={{ margin: "0.5rem" }}
            className={stylesLink1.LinkNoDefaultUnderline}
            href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes"
          >
            {curLang.quiz_bottom_link_text}
          </a>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <a
              className={stylesLink.Link}
              href="https://www.checkyourtechskills.com/"
            >
              {curLang.quiz_test_yourself}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;

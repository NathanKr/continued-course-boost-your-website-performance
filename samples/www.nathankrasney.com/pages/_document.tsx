import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const strategy = 'afterInteractive'
  return (
    <Html>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

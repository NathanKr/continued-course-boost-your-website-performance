import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/css/bootstrap-with-purgecss.css";
import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "src/components/layout";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleTagManager } from "@next/third-parties/google";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const inter = Inter({
  subsets: ["latin"],
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
          <GoogleTagManager gtmId={googleAnalyticsId!} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;

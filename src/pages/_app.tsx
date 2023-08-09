import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <DefaultSeo
            canonical={SEO.openGraph.url}
            {...SEO}
            additionalMetaTags={[
              {
                name: "keywords",
                content: SEO.openGraph.keywords,
              },
              {
                name: "twitter:image",
                content: SEO.openGraph.images[0].url,
              },
              {
                name: "twitter:title",
                content: SEO.openGraph.title,
              },
              {
                name: "twitter:description",
                content: SEO.openGraph.description,
              },
              {
                httpEquiv: "x-ua-compatible",
                content: "IE=edge; chrome=1",
              },
            ]}
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

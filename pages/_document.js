import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-regular.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-italic.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-italic.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700italic.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700italic.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

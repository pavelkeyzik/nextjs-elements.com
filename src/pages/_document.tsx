import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Free Next.js Templates, Boilerplates, and Starter Kits for your website."
          />
          <meta
            name="keywords"
            content="Next.js, Templates, Boilerplates, Starter Kits"
          />
          <meta name="author" content="Pavel Keyzik" />
          <link rel="sortcut icon" href="/favicon.ico" />
          <meta
            itemProp="name"
            content="Next.js Elements | Free Templates and Boilerplates"
          />
          <meta
            itemProp="description"
            content="Free Next.js Templates, Boilerplates, and Starter Kits for your website."
          />
          <meta itemProp="image" content="/assets/meta/card-image.png" />

          <meta property="og:url" content="https://www.nextjs-elements.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Next.js Elements | Free Templates and Boilerplates"
          />
          <meta
            property="og:description"
            content="Free Next.js Templates, Boilerplates, and Starter Kits for your website."
          />
          <meta property="og:image" content="/assets/meta/card-image.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Next.js Elements | Free Templates and Boilerplates"
          />
          <meta
            name="twitter:description"
            content="Free Next.js Templates, Boilerplates, and Starter Kits for your website."
          />
          <meta name="twitter:image" content="/assets/meta/card-image.png" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Q4T6HYR0JP"
          />
          {process.env.NEXT_PUBLIC_APP_TYPE === "production" ? (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-Q4T6HYR0JP');
              `,
              }}
            ></script>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

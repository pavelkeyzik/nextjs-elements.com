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

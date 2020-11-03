import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,700"
            rel="stylesheet"
          />

          <link rel="shortcut icon" type="image/png" href={"/favicon.png"} />

          <meta charSet="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Your developer mentor | mymentor.dev</title>
          <meta
            name="description"
            content="Mentoring you to become a developer"
          ></meta>
          <meta
            property="og:description"
            content="Mentoring you to become a developer"
          ></meta>
          <meta
            data-react-helmet="true"
            property="og:type"
            content="website"
          ></meta>
          <meta
            data-react-helmet="true"
            name="twitter:card"
            content="summary"
          ></meta>
          <meta
            data-react-helmet="true"
            name="twitter:description"
            content="Mentoring you to become a developer"
          ></meta>
          <meta
            data-react-helmet="true"
            name="twitter:creator"
            content="@radubrehear"
          ></meta>
          <meta
            name="keywords"
            content="developer, mentor, learn, programming, react, code, frontend"
          ></meta>
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

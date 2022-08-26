import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap"
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


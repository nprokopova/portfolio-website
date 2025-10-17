import React from "react";
import Script from "next/script";
import type { AppProps } from "next/app";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { ThemeProvider } from "components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-595KJSMNG9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-595KJSMNG9');
        `}
      </Script>

      <Navbar
        color="default"
        logo="/images/logo1.png"
        logoInverted="/images/logo1dark.png"
      />

      <Component {...pageProps} />

      <Footer
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        logo="/images/logo1.png"
        logoInverted="/images/logo1dark.png"
        sticky={true}
      />
    </ThemeProvider>
  );
}

export default MyApp;

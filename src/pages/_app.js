import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { ThemeProvider } from "util/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Navbar
          color="default"
          logo="https://i.postimg.cc/DzWrDspC/logo1.png"
          logoInverted="https://i.postimg.cc/dtb48Jsk/logo1dark.png"
        />

        <Component {...pageProps} />

        <Footer
          bgColor="light"
          size="normal"
          bgImage=""
          bgImageOpacity={1}
          logo="https://i.postimg.cc/DzWrDspC/logo1.png"
          logoInverted="https://i.postimg.cc/dtb48Jsk/logo1dark.png"
          sticky={true}
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;

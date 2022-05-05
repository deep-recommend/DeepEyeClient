import "../styles/globals.scss";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-sine",
      duration: 600,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

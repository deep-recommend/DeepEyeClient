import React, { useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import $ from "jquery";

export default function Document() {
  useEffect(() => {
    $(window).on("load", function () {
      $("#splash").delay(1500).fadeOut("slow");
      $("#splash_logo").delay(1200).fadeOut("slow");
    });
  }, []);

  return (
    <Html>
      <Head>
        <link
          href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css"
          rel="stylesheet"
        />
        <link
          href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/css/4-1-4.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="splash">
          <div id="splash_logo">
            <img src="/logo.jpg" alt="" className="fadeUp" />
          </div>
        </div>

        <Main />
        <NextScript />

        <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossOrigin="anonymous"
        ></script>
        <script src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/js/4-1-4.js"></script>
      </body>
    </Html>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import { toDataUrl } from "../utils/toDataurl";

const Home: NextPage = () => {
  const fileRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [dataurl, setDataurl] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setReady(true);
  }, []);

  const inputImage = async (event: any) => {
    const file = event.target.files[0];
    const dataurl = await toDataUrl(file, { maxWidth: 640 });
    setDataurl(dataurl);
    setFileName(file.name);
    event.target.value = null;
  };

  if (!ready) return <></>;

  return (
    <div className={styles.container}>
      <Head>
        <title>DeepEye</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        <main>
          <div className="blue-eye" data-aos="flip-up">
            <img
              src="/deep-eye.png"
              width={"100%"}
              style={{ opacity: "0.9" }}
            />
            <div
              className="gooey"
              onClick={() => (fileRef.current as any).click()}
            >
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>

          <input
            ref={fileRef}
            onChange={inputImage}
            multiple={false}
            type="file"
            hidden
          />
        </main>
      </div>
    </div>
  );
};

export default Home;

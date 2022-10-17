import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({
  children,
  title = "Nyadero Brian Odhiambo",
  description = "Software engineer",
  keywords = "android, java, kotlin, python, mysql, remote, freelance",
}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className={styles.navContainer}>
        {/* navigation */}
        <Navigation />
      </div>

      <div className={styles.container}>
        <section className={styles.main}>{children}</section>
      </div>

      {/* footer */}
      <div className={styles.footerContainer}>
         <Footer />
      </div>
    </div>
  );
}
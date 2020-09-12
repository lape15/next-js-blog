import Head from "next/head";
import styles from "./layout.module.css";
import Navbar from "./Navbar";
import Menu from "./menu/Menu";
import MenuContextProvider from "../context/MenuContext";

const name = "Lape";
export const siteTitle = "Lape";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kufam:wght@600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Raleway&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&family=Vidaloka&display=swap"
          rel="stylesheet"
        ></link>

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      <Menu />
      <main>{children}</main>
    </div>
  );
}

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Mainpage from "@/components/mainpage";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>혜성의 포트폴리오</title>
        <meta name="description" content="나의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mainpage></Mainpage>
    </Layout>
  );
}
  
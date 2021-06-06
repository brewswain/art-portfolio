import Head from "next/head";

import { Layout } from "../components";

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Art thingy</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div
        className={styles.home__page}
        role="img"
        alt="Artwork Provided by Pawel Czerwinski on Unsplash.com"
      ></div>
    </Layout>
  );
};

export default Home;

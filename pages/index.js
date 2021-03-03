import Head from "next/head";

import { Layout } from "../components";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Art thingy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
};

export default Home;

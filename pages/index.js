import axios from "axios";
import Head from "next/head";
import Chicken from "../components/ChickenList/Chicken";
import Feature from "../components/Featured/Feature";
import styles from "../styles/Home.module.css";

export default function Home({ chickenList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chicken Farm in Owerri</title>
        <meta name="description" content="The best Chicken Farm in Owerri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      <Chicken chickenList={chickenList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      chickenList: res.data,
    },
  };
};

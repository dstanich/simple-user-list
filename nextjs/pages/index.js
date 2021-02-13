import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import Title from '../components/Title';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Next.js User List</title>
      </Head>
      <Title text="Next.js User List" />
    </div>
  );
}

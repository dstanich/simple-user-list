import Head from 'next/head';

import '../styles/globals.scss';
import styles from '../styles/App.module.scss';
import Title from '../components/Title';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js User List</title>
      </Head>
      <div className={styles.app}>
        <Title text="Next.js User List" />
        <div className={styles['scrollable-area']}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

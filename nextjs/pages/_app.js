import { useCallback, useState } from 'react';
import Head from 'next/head';

import { AppContext } from '../context/App';
import '../styles/globals.scss';
import styles from '../styles/App.module.scss';
import Title from '../components/Title';

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState();
  const [seed, setSeed] = useState();

  const setSearch = useCallback((inCount, inSeed) => {
    setCount(inCount);
    setSeed(inSeed);
  });

  return (
    <AppContext.Provider value={{ search: { count, seed, setSearch } }}>
      <Head>
        <title>Next.js User List</title>
      </Head>

      <div className={styles.app}>
        <Title text="Next.js User List" />
        <div className={styles['scrollable-area']}>
          <Component {...pageProps} />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;

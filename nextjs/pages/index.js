import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Home.module.scss';
import Title from '../components/Title';
import Search from '../components/Search';
import Users from '../components/Users';

export default function Home() {
  const [search, setSearch] = useState({});

  const searchChanged = (count, seed) => setSearch({ count, seed });

  return (
    <div className={styles.app}>
      <Head>
        <title>Next.js User List</title>
      </Head>
      <Title text="Next.js User List" />
      <div className={styles['scrollable-area']}>
        <Search
          className={styles['content-container']}
          searchChanged={searchChanged}
        ></Search>
        <Users className={styles['content-container']} search={search}></Users>

        <div className={styles.notices}>
          Mock user data provided by{' '}
          <a
            href="https://randomuser.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            randomuser.me
          </a>
        </div>
      </div>
    </div>
  );
}

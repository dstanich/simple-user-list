import { useContext } from 'react';

import { AppContext } from '../context/App';
import styles from '../styles/Home.module.scss';
import Search from '../components/Search';
import Users from '../components/Users';

export default function Home() {
  const {
    search: { count, seed, setSearch },
    users: { items, setUsers },
  } = useContext(AppContext);

  const searchChanged = (inCount, inSeed) => setSearch(inCount, inSeed);

  return (
    <>
      <Search
        className={styles['content-container']}
        count={count}
        seed={seed}
        searchChanged={searchChanged}
      ></Search>
      <Users
        className={styles['content-container']}
        count={count}
        seed={seed}
        users={items}
        setUsers={setUsers}
      ></Users>

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
    </>
  );
}

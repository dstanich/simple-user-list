import { useContext, useEffect } from 'react';

import { AppContext } from '../context/App';
import styles from '../styles/Home.module.scss';
import Search from '../components/Search';
import Users from '../components/Users';

export default function Home(props) {
  const {
    search: { count, seed, setSearch },
    users: { items, setUsers },
  } = useContext(AppContext);

  // Initial load values, from getStaticProps()
  useEffect(() => {
    setSearch(props.count, props.seed);
    setUsers(props.users);
  }, [props.count, props.seed, props.users]);

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

/**
 * Called at build time
 * Gets all the data for the default search.  The component will then
 * get these values as input props.
 */
export async function getStaticProps() {
  const count = 100;
  const seed = 'demo';
  const res = await fetch(
    `https://randomuser.me/api/?results=${count}&seed=${seed}`
  );
  const { results } = await res.json();
  return {
    props: { users: results, count, seed },
  };
}

import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../../../styles/UserDetails.module.scss';

export default function UserDetails(props) {
  const router = useRouter();

  const items = props.users;
  const { id } = router.query;

  const matchedItem = (items || []).filter((item) => item.login.uuid === id);

  return (
    <div className={styles['content-container']}>
      <Link href="/" className={styles.back}>
        <a href="">&lt; Back</a>
      </Link>

      {matchedItem.length === 0 ? (
        <div className={styles['user-id']}>
          {router.isFallback
            ? `Loading user data...`
            : `Cannot find user ID ${id} within the seed `}
        </div>
      ) : (
        <>
          <div className={styles['user-id']}>Login UUID {id}</div>
          <div className={styles['user-container']}>
            JSON Data:
            <pre>{JSON.stringify(matchedItem, null, 2)}</pre>
          </div>
        </>
      )}
    </div>
  );
}

const count = 100;
const initialSeed = 'demo';

/**
 * Called at build time
 * Get all users and pass them in as prop so the page so we can read the
 * data for the users.
 */
export async function getStaticProps(data) {
  const {
    params: { seed },
  } = data;
  const res = await fetch(
    `https://randomuser.me/api/?results=${count}&seed=${seed}`
  );
  const { results } = await res.json();
  return {
    props: { users: results, count, seed },
  };
}

/**
 * Called at build time
 * Pre-build all the paths for the initial search.  All of the initial search
 * results will be pre-generated at build time.
 *
 * Setting `fallback: true` allows NextJS to generate pages for other paths/seeds
 * instead of just giving a 404.
 */
export async function getStaticPaths() {
  const res = await fetch(
    `https://randomuser.me/api/?results=${count}&seed=${initialSeed}`
  );
  const { results } = await res.json();

  // Map each item in results to an obj containing the path for pages
  const paths = results.map((item) => ({
    params: {
      seed: initialSeed,
      id: item.login.uuid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

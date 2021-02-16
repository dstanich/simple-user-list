import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { AppContext } from '../../context/App';
import styles from '../../styles/UserDetails.module.scss';

export default function UserDetails(props) {
  const router = useRouter();
  const {
    users: { items },
  } = useContext(AppContext);
  const { id } = router.query;

  const matchedItem = (items || []).filter((item) => item.login.uuid === id);

  return (
    <div className={styles['content-container']}>
      <Link href="/" className={styles.back}>
        <a href="">&lt; Back</a>
      </Link>

      {matchedItem.length === 0 ? (
        <div className={styles['user-id']}>
          Cannot find user ID {id}. Go back and reload the data.
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

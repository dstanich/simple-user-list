import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../../styles/UserDetails.module.scss';

export default function UserDetails(props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles['content-container']}>
      <Link href="/" className={styles.back}>
        <a href="">&lt; Back</a>
      </Link>
      <div>user {id}</div>
    </div>
  );
}

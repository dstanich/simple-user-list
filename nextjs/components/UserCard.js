import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/UserCard.module.scss';

function UserCard(props) {
  const { data, removeUser, seed } = props;
  const { name, location, dob, phone, picture, login } = data;

  return (
    <div className={styles.user}>
      <div>
        <Link
          href={`/${seed}/user/${login.uuid}`}
          className={styles['user-name']}
        >
          <a href="">
            {name.first} {name.last}
          </a>
        </Link>

        <div className={styles['age-container']}>
          <span className={styles['age-label']}>Age:</span> {dob.age}
        </div>

        <div className={styles.address}>
          <div>
            {location.street.number} {location.street.name}
          </div>
          <div>
            {location.city}, {location.state} {location.postcode}
          </div>
          <div>{location.country}</div>
        </div>

        <div className={styles.phone}>{phone}</div>
      </div>

      <div>
        <Image src={picture.large} alt="" width="128" height="128" />
      </div>

      <div className={styles['delete-container']}>
        <button
          className={styles['delete-button']}
          onClick={() => removeUser(data)}
        >
          <span role="img" aria-label="Remove user">
            🗑️
          </span>
        </button>
      </div>
    </div>
  );
}

export default UserCard;

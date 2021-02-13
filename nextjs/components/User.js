import React from 'react';

import styles from '../styles/User.module.scss';

function User(props) {
  const { data, removeUser } = props;
  const { name, location, dob, phone, picture } = data;

  return (
    <div className={styles.user}>
      <div>
        <div className={styles['user-name']}>
          {name.first} {name.last}
        </div>

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

      <img src={picture.large} alt="" />

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

export default User;

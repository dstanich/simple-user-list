import React, { useRef } from 'react';

import styles from '../styles/Search.module.scss';

const MAX_COUNT = 50;

function Search(props) {
  const { className, count, seed, searchChanged } = props;
  const userCountRef = useRef(null);
  const seedRef = useRef(null);

  return (
    <div className={className + ' ' + styles.search}>
      <input
        id="search-count"
        type="number"
        placeholder="Count"
        aria-label="Number of users"
        ref={userCountRef}
        defaultValue={count}
        max={MAX_COUNT}
      />
      <input
        id="search-seed"
        type="text"
        placeholder="Seed"
        aria-label="Random generator seed"
        ref={seedRef}
        defaultValue={seed}
      />
      <button
        className={styles['search-button']}
        onClick={() => {
          if (userCountRef.current.value > MAX_COUNT) {
            userCountRef.current.value = MAX_COUNT;
          }
          searchChanged(userCountRef.current.value, seedRef.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;

import React, { useRef } from 'react';

import styles from '../styles/Search.module.scss';

function Search(props) {
  const { className, searchChanged } = props;
  const userCount = useRef(null);
  const seed = useRef(null);

  return (
    <div className={className + ' ' + styles.search}>
      <input
        id="search-count"
        type="number"
        placeholder="Count"
        aria-label="Number of users"
        ref={userCount}
      />
      <input
        id="search-seed"
        type="text"
        placeholder="Seed"
        aria-label="Random generator seed"
        ref={seed}
      />
      <button
        className={styles['search-button']}
        onClick={() =>
          searchChanged(userCount.current.value, seed.current.value)
        }
      >
        Search
      </button>
    </div>
  );
}

export default Search;

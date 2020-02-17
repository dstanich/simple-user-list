import React, { useRef } from 'react';

import './Search.scss';

function Search(props) {
  const { className, searchChanged } = props;
  const userCount = useRef(null);
  const seed = useRef(null);

  return (
    <div className={className + ' Search'}>
      <input
        type="number"
        placeholder="Count"
        aria-label="Number of users"
        ref={userCount}
      />
      <input
        type="text"
        placeholder="Seed"
        aria-label="Random generator seed"
        ref={seed}
      />
      <button
        className="search-button"
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

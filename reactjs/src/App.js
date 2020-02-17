import React, { useState } from 'react';

import './App.scss';
import Title from './Title/Title';
import Search from './Search/Search';
import Users from './Users/Users';

function App() {
  const [search, setSearch] = useState({});

  const searchChanged = (count, seed) => setSearch({ count, seed });

  return (
    <div className="App">
      <Title text="React User List" />
      <div className="scrollable-area">
        <Search
          className="content-container"
          searchChanged={searchChanged}
        ></Search>
        <Users className="content-container" search={search}></Users>

        <div className="notices">
          Mock user data provided by{' '}
          <a
            href="https://randomuser.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            randomuser.me
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

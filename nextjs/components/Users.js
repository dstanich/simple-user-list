import React, { useEffect } from 'react';

import styles from '../Styles/Users.module.scss';
import UserCard from './UserCard';

function Users(props) {
  const { className, count, seed, users, setUsers } = props;

  // When the search is changed execute the API call on the client
  useEffect(() => {
    if (count === undefined || (users && users.length > 0)) {
      return;
    }

    let url = `https://randomuser.me/api/?results=${count}`;
    url = seed ? `${url}&seed=${seed}` : url;
    fetch(url)
      .then((result) => result.json())
      .then((data) => setUsers(data.results));
  }, [users, count, seed]);

  const removeUser = (userToDel) => {
    const filteredUsers = users.filter((cur) => cur !== userToDel);
    setUsers(filteredUsers);
  };

  if (count === undefined) {
    return null;
  }

  if (users) {
    return (
      <div className={className + ' ' + styles.users}>
        {users.map((user) => (
          <UserCard
            key={user.login.uuid}
            data={user}
            seed={seed}
            removeUser={removeUser}
          ></UserCard>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Users;

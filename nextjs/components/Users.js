import React, { useEffect, useState } from 'react';

import styles from '../Styles/Users.module.scss';
import UserCard from './UserCard';

function Users(props) {
  const { className, count, seed } = props;

  const [users, setUsers] = useState();

  useEffect(() => {
    if (count === undefined) {
      return;
    }

    let url = `https://randomuser.me/api/?results=${count}`;
    url = seed ? `${url}&seed=${seed}` : url;
    fetch(url)
      .then((result) => result.json())
      .then((data) => setUsers(data.results));
  }, [count, seed]);

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

import React, { useEffect, useState } from 'react';

import './Users.scss';
import User from './User/User';

function Users(props) {
  const { className, search } = props;

  const [users, setUsers] = useState();

  useEffect(() => {
    const { count, seed } = search;

    let url = `https://randomuser.me/api/?results=${count}`;
    url = seed ? `${url}&seed=${seed}` : url;
    fetch(url)
      .then(result => result.json())
      .then(data => setUsers(data.results));
  }, [search]);

  const removeUser = userToDel => {
    const filteredUsers = users.filter(cur => cur !== userToDel);
    setUsers(filteredUsers);
  };

  if (!search || !search.count) {
    return null;
  }

  if (users) {
    return (
      <div className={className + ' Users'}>
        {users.map(user => (
          <User
            key={user.email + user.name.first + user.name.last + user.phone}
            data={user}
            removeUser={removeUser}
          ></User>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Users;

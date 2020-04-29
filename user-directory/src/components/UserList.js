import React from 'react';
import UserCard from './UserCard';

function UserList(props) {
  let users = props.users.map(user => {
    return (
      <UserCard
        name={user.name}
        position={user.position}
        number={user.number}
        email={user.email}
        birthday={user.birthday}
      />
    );
  });
  return <div>{users}</div>;
}

export default UserList;

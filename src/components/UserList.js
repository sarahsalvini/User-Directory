import React from 'react';
import UserCard from './UserCard';
import Container from 'react-bootstrap/Container';

function UserList(props) {
  let users = props.filteredUsers.map((user, i) => {
    return (
      <Container>
        <UserCard
          key={i}
          name={user.name}
          position={user.position}
          number={user.number}
          email={user.email}
          birthday={user.birthday}
        />
      </Container>
    );
  });
  return <div>{users}</div>;
}

export default UserList;

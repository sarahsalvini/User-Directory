import React from 'react';
import Table from 'react-bootstrap/Table';

function UserCard(props) {
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.position}</td>
            <td>{props.number}</td>
            <td>{props.email}</td>
            <td>{props.birthday}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UserCard;

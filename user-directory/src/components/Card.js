import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Employee Name</Card.Title>
        <Card.Text>the employee's position</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Phone Number: </ListGroup.Item>
        <ListGroup.Item>Email: </ListGroup.Item>
        <ListGroup.Item>D.O.B: </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default UserCard;

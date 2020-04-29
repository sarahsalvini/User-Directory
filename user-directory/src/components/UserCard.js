import React from 'react';
// import UserList from './UserList';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Card from 'react-bootstrap/ListGroup';
// import Col from 'react-bootstrap/Col';

function UserCard(props) {
  return (
    <div>
      <p> Name: {props.name}</p>
      <p> Position: {props.position}</p>
    </div>

    // <Col>
    //   <Card className="p-3" style={{ width: '18rem' }}>
    //     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //     <Card.Body>
    //       <Card.Title>{props.name}</Card.Title>
    //       <Card.Text>{props.position}</Card.Text>
    //     </Card.Body>
    //     <ListGroup variant="flush">
    //       <ListGroup.Item>Phone Number: {props.number}</ListGroup.Item>
    //       <ListGroup.Item>Email: {props.email}</ListGroup.Item>
    //       <ListGroup.Item>D.O.B: {props.birthday}</ListGroup.Item>
    //     </ListGroup>
    //   </Card>
    // </Col>
  );
}

export default UserCard;

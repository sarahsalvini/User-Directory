import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import employeeData from '../utils/employeeData.json';
import { Component } from 'react';
import Col from 'react-bootstrap/Col';

class UserCard extends Component {
  render() {
    return (
      <div>
        {employeeData.UserInfo.map((userinfo, i) => {
          return (
            <div key={i}>
              <Col>
                <Card className="p-3" style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src="holder.js/100px180?text=Image cap"
                  />
                  <Card.Body>
                    <Card.Title>{userinfo.name}</Card.Title>
                    <Card.Text>{userinfo.position}</Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Phone Number: {userinfo.phoneNumber}
                    </ListGroup.Item>
                    <ListGroup.Item>Email: {userinfo.email}</ListGroup.Item>
                    <ListGroup.Item>D.O.B: {userinfo.birthday}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserCard;

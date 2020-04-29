import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeading from './components/Jumbotron';
import UserCard from './components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <MainHeading />
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <UserCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

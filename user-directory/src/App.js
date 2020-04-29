import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeading from './components/Jumbotron';
import SearchBar from './components/Search';
import UserList from './components/UserList';
import UserCard from './components/UserCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
// import employeeData from './utils/employeeData.json';

// this.state = { employeeData, searchUser: '' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Sarah Salvini',
          position: 'Intern',
          phoneNumber: '913-123-4567',
          email: 'sarah@example.com',
          birthday: '9/24/1996',
        },
        {
          name: 'Sam Salvini',
          position: 'Event Coordinator',
          phoneNumber: '913-849-2848',
          email: 'sam@example.com',
          birthday: '12/27/1992',
        },
        {
          name: 'Joel Taylor',
          position: 'Professional Hunter',
          phoneNumber: '816-123-5643',
          email: 'Joel@example.com',
          birthday: '6/21/1986',
        },
      ],
      searchUser: '',
    };
  }

  handleInput = e => {
    console.log(e.target.value);
    this.setState({ searchUser: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <MainHeading />
        <SearchBar handleInput={this.handleInput} />
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <UserList users={this.state.users} />
              <UserCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeading from './components/Jumbotron';
import SearchBar from './components/Search';
import UserList from './components/UserList';
import UserCard from './components/UserCard';
import Container from 'react-bootstrap/Container';
import { Component } from 'react';
import employeeData from './utils/employeeData.json';
import Table from 'react-bootstrap/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: employeeData, searchUser: '' };
  }

  handleInput = e => {
    console.log(e.target.value);
    this.setState({ searchUser: e.target.value });
  };

  render() {
    let filteredUsers = this.state.users.filter(user => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchUser.toLowerCase());
    });
    return (
      <div className="App">
        <MainHeading />
        <SearchBar handleInput={this.handleInput} />
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>D.O.B</th>
              </tr>
            </thead>
          </Table>
        </Container>
        <UserList filteredUsers={filteredUsers} />
        <UserCard />
      </div>
    );
  }
}

export default App;

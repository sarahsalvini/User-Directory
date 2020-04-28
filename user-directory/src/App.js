import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeading from './components/Jumbotron';
import SearchBar from './components/Search';
import UserCard from './components/Card';

function App() {
  return (
    <div className="App">
      <MainHeading />
      <UserCard />
    </div>
  );
}

export default App;

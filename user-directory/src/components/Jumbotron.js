import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchBar from './Search';

function MainHeading() {
  return (
    <Jumbotron>
      <h1>Employee Directory</h1>
      <p>Filter through your employee's to get to know them better!</p>
      <SearchBar />
    </Jumbotron>
  );
}

export default MainHeading;

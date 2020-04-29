import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchBar(props) {
  return (
    <Navbar className="justify-content-center">
      <Form inline>
        <FormControl
          onChange={props.handleInput}
          type="text"
          placeholder="Search a name"
          className=" mr-sm-2"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Navbar>
  );
}

export default SearchBar;

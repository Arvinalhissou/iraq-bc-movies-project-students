import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar className="bg-light justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
    </Navbar>
  );
}
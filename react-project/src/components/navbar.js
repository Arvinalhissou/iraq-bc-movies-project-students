import React, { Component } from "react";
import { MdMovieFilter } from "react-icons/md";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export default function myNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <MdMovieFilter size="2.5rem" color="#17a2b8" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* <FaHome size="1.2rem" className="mr-2" /> */}
          <Nav.Link href="#home" className="mr-5">
            HOME
          </Nav.Link>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Nav>
      </Navbar>
    </>
  );
}

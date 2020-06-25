import React, { Component } from "react";
import React, { useState } from "react";
import { MdMovieFilter } from "react-icons/md";
import SearchBox from "./component/search";

import { Navbar, Nav, Spinner } from "react-bootstrap";

export default function myNavbar() {
  const [show, setShow] = useState(true);
  const onSearch = () => {
    setShow(false);
    setInterval(() => {
      setShow(true);
    }, 2000);
  };
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <MdMovieFilter size="2.5rem" color="#17a2b8" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="mr-5">
            HOME
          </Nav.Link>
        </Nav>
        <Spinner
          animation="border"
          role="status"
          className="m-2"
          variant="info"
          hidden={show}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>

        <SearchBox onSearch={onSearch} />
      </Navbar>
    </>
  );
}

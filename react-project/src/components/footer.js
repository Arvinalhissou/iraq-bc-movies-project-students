import React, { Component } from "react";

import { FaGithub } from "react-icons/fa";
// import MyNavbar from "./navbar";
// import MyMain from "./main"

import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
const style = {
  backgroundColor: "#D5D8DC",
  color: "#808B96 ",
  fontSize: "12px",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
};
const link = {
  color: "#34495E ",
  textDecoration: "none",
};

const Myfooter = () => {
  return (
    <div className="p-2 main-footer" style={style}>
      <div className="container">
        <div className="row">
          <p className="col  ">
            Made By our team :{" "}
            <a href="https://github.com/Hewr-Srood" style={link}>
              {" "}
              <FaGithub /> Hewr{" "}
            </a>
            <a href="https://github.com/neven2" style={link}>
              {" "}
              <FaGithub /> Neven{" "}
            </a>
            <a href="https://github.com/Arvinalhissou" style={link}>
              {" "}
              <FaGithub /> Arvin{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Myfooter;

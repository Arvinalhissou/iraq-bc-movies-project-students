import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Myfooter from "./components/footer";

function App() {
  return (
    <>
      <MyNavbar />;
      <Myfooter />;
    </>
  );
}

export default App;

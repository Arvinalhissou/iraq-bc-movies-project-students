import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Myfooter from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <div className="page-container">
        <div className="content-wrap">
          <MyNavbar />;
          
        </div>
        <Myfooter />;
      </div>
    </React.Fragment>
  );
}

export default App;

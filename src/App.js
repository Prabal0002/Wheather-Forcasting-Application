import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/singh-prabal">
          © Prabal Singh 
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
         Prabal Singh
        </a>{" "}
        | contact {" "}
        <a target="_blank" href="prabalsingh9285@gmail.com">
          Gmail
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;

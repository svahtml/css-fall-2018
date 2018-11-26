import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header>Title Passed from App</Header>
      <h1>My App title running local</h1>
      <h2>This is my cool react app</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header kind="small">Old Header</Header>
      {
        React.createElement(Header, {kind: 'large', children: "new props"} )
      }
      <Header kind="large">New Header</Header>
      <h1>Hello CodeSandbox</h1>
      <h2>Hello Class I hope you like React</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

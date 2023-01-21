import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const name = props.name;
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Welcome to my first react component</p>
    </div>
  );
};

ReactDOM.render(<App name="Sarah Smith" />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";

var header = <h1>Hello, Lord Smith</h1>;
ReactDOM.render(header, document.getElementById("root"));







var header = <h1> Hello John</h1>;
var app = (
  <div>
    {header}
    {subheader}
  </div>
);
ReactDOM.render(app, document.getElementById("root"));





var name = "Lori Smith";
var app = (
  <div>
    <h1>Hello, {name}</h1>
  </div>
);
ReactDOM.render(app, document.getElementById("root"));

var url = "https://mimo.app/i/lori.png";
var app = (
  <div>
    <img src={url} alt="Lori's profile" />
  </div>
);
ReactDOM.render(app, document.getElementById("root"));

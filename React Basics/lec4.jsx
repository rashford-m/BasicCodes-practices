import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Image Container</h2>
        <img src={this.props.src} alt={this.props.alt} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>Welcome to your first react Class Component</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const welcome = this.props.name;
    return (
      <div>
        <h1>Welcome</h1>
        <p>welcome to my first react component</p>
      </div>
    );
  }
}

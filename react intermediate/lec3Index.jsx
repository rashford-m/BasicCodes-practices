import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  countDown = () => {
    this.setState({ count: this.state.count - 1 });
  };
  countUp = () => {
    this.state({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <p>I've been clicked {this.state.count} times</p>
        <CustomButton text="Count down" handleClick={this.countDown} />
        <CustomButton text="Count Up" handleClick={this.countUp} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

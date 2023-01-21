import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.updateCount}>Click Me</button>
        <p>I've been clicked {this.state.count} times!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

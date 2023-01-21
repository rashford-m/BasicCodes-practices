import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { search: "" };
  }
  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const remaining = 16 - this.state.search.length;
    return (
      <div>
        <h3>Boogle</h3>
        <input
          name="searchQuery"
          value={this.state.search}
          placeholder="Ex. Dogs"
          onChange={this.handleSearch}
          maxLength="16"
        />
        <span>{remaining}</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root") );

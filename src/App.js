import React, { Component } from "react";
import Repos from "./Repos";
import "./App.css";

class App extends Component {
  state = {
    query: ""
  };

  handleQueryChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleQueryChange}
        />
        <Repos queryString={this.state.query} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import RepoSearch from "./RepoSearch";
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
        <DebounceInput
          type="text"
          placeholder="Search repositories…"
          debounceTimeout={300}
          onChange={this.handleQueryChange}
        />
        <RepoSearch queryString={this.state.query} />
      </div>
    );
  }
}

export default App;

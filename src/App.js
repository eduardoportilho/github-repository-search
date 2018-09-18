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
        <div className="top-bar">
          <h1>GitHub Repository Search</h1>
          <DebounceInput
            type="text"
            placeholder="Search repositories…"
            debounceTimeout={300}
            onChange={this.handleQueryChange}
          />
        </div>
        <RepoSearch queryString={this.state.query} />
      </div>
    );
  }
}

export default App;

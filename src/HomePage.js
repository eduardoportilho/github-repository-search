import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import RepoSearch from "./RepoSearch";
import logo from "./logo.svg";

class HomePage extends Component {
  state = {
    query: this.props.match.params.query || ""
  };

  componentDidMount = () => {
    this.searchInputField.focus();
  };

  handleQueryChange = event => {
    const query = event.target.value;
    this.setState({ query }, () => {
      this.props.history.replace(`/${query}`);
    });
  };

  render() {
    return (
      <div>
        <div className="top-bar">
          <h1>
            <img src={logo} className="logo" alt="logo" />
            GitHub Repository Search
          </h1>
          <DebounceInput
            inputRef={ref => {
              this.searchInputField = ref;
            }}
            type="text"
            placeholder="Search repositories…"
            debounceTimeout={300}
            onChange={this.handleQueryChange}
            value={this.state.query}
          />
        </div>
        <RepoSearch queryString={this.state.query} />
      </div>
    );
  }
}

export default HomePage;

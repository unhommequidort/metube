import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          id="main-search"
          type="text"
          placeholder="Search MeTube"
          value={this.state.term}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;

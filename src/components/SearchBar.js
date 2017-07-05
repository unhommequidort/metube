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
      <form className="SearchBar">
        <div className="form-group">
          <label htmlFor="main-search" className="sr-only">
            Search MeTube
          </label>
          <input
            id="main-search"
            className="form-control"
            type="text"
            placeholder="Search MeTube"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;

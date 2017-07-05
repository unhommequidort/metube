import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyDFVbFw5NBIJZFX7Au51L4Yeum7VCK4tgk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "frontside flip" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

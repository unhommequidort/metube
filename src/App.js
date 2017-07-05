import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from './components/VideoDetail';

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
        <div className="row">
          <VideoDetail video={this.state.videos[0]} />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

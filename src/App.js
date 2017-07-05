import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyDFVbFw5NBIJZFX7Au51L4Yeum7VCK4tgk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideo("frontside flip");
  }

  searchVideo(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const searchVideo = _.debounce(term => {
      this.searchVideo(term);
    }, 300);

    return (
      <div className="App">
        <SearchBar searchVideo={searchVideo} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </div>
    );
  }
}

export default App;

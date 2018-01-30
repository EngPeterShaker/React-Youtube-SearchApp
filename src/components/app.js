import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "./search_bar";
import VideoList from "./../components/video_list";
import VideoDetail from "./video_detail";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyCK3ACG0hG4q3NmqP-bTHlNpQW5wPXJBOc";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchText: "Peter",
      selectedVideo: null,
      // selectedVideo: videos[0]
    };
    this.videoSearch('peter');
  }

    videoSearch(term){          
      YTSearch({ key: API_KEY, term:term }, videos => {
        console.log(videos);
        this.setState({
          videos: videos,
          selectedVideo: videos[3]
        });
      });
    }

  render() {
    const videoSearch = _.debounce((searchText) => {this.videoSearch(searchText)}, 300);
    // var debounced = _.debounce(batchLog, 250, { maxWait: 1000 });

    return (
      <div>
        <h3>React simple starter</h3>
        <SearchBar onSearch={searchText => videoSearch( searchText)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

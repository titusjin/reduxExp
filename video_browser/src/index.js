<<<<<<< HEAD
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';
=======
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
>>>>>>> upstream/master

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

<<<<<<< HEAD
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
=======
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
>>>>>>> upstream/master
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
<<<<<<< HEAD
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
=======
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
>>>>>>> upstream/master

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
<<<<<<< HEAD
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
=======
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
>>>>>>> upstream/master
      </div>
    );
  }
}

<<<<<<< HEAD
ReactDOM.render(<App />, document.querySelector('.container'));
=======
ReactDOM.render(<App />, document.querySelector(".container"));
>>>>>>> upstream/master

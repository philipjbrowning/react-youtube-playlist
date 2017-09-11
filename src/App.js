import React, { Component } from 'react';
import './App.css';
import './style/style.css';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import * as _ from "lodash";

const API_KEY = 'AIzaSyBtAlTEK-G0v81ejuTDnp1Ab7Rw1-qoPEs';

class App extends Component {
  constructor(props) {
    super(props);
	
	  this.state = { selectedVideo: null, videos: [] };
	  
	  this.videoSearch('surfboards');
  }
  
  videoSearch(term) {
	  YTSearch({key: API_KEY, term: term}, (videos) =>  {
		  this.setState({
			  selectedVideo: videos[0],
			  videos: videos
		  });
	  });
  }
  
  render() {
  	const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
  	
    return (
      <div className="App">
	      <h1>YouTube Search</h1>
        <SearchBar onSearchTermChange={videoSearch}/>
	      <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
	        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	        videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;

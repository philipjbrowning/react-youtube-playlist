import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = 'AIzaSyBtAlTEK-G0v81ejuTDnp1Ab7Rw1-qoPEs';

class App extends Component {
  constructor(props) {
    super(props);
	
	  this.state = { selectedVideo: null, videos: [] };
	  
	  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
		  this.setState({
			  selectedVideo: videos[0],
			  videos: videos
		  });
	  });
  }
  render() {
    return (
      <div className="App">
        <SearchBar/>
	      <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
	        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	        videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;

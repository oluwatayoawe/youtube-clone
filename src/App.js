import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCHh_bSKNjCyPeb57pftlUxxy09nwtHf88';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {videos: [],
      selectedVideo: null };

}
search(term) {
  YTSearch({key: API_KEY, term: term}, (videos) =>{
    this.setState({ videos: videos,
      selectedVideo: videos[0]
     });
  });
}


    render() {
      const search = _.debounce(term => {this.search(term)}, 300)
        return (
              <div>
              <header className = "App-header" >
                    <SearchBar search={search}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})} videos={this.state.videos}
                       />
              </header>
              </div>
        );
    }
}

export default App;

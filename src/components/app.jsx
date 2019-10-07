import React, { Component } from 'react';
import SearchBar from './search_bar';
import Movie from './movie';

require('dotenv').config();

console.log("hello" + process.env.REACT_APP_TMDB_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
    };
  }

  search = (query) => {

  }

  render () {
    return (
      <div>
        <div className="search-bar">
          <SearchBar />
          <Movie />
        </div>
        <div className="movie-list"></div>
      </div>
    );
  }
}

export default App;

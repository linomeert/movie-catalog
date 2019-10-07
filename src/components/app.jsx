import React, { Component } from 'react';
import SearchBar from './search_bar';
import MovieList from './movie_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  search = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a4ef96ecdc907bcabebd22afc30313fc&query=${query}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          movies: data.results
        });
      });
  }

  render () {
    return (
      <div>
        <div className="search-bar">
          <SearchBar searchFunction={this.search} />

        </div>
        <div className="movie-list">
          <MovieList movies={this.state.movies} />

        </div>
      </div>
    );
  }
}

export default App;

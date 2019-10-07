import React, { Component } from 'react';
import Movie from './movie';


class MovieList extends Component {
  render () {
    console.log(this.props);
    return (
     <div className="movie-list">
       {this.props.movies.map(movie => {
           return <Movie title={movie.original_title} poster={movie.poster_path} key={movie.original_title}  />
         })}
     </div>
    )
  }
}

export default MovieList;

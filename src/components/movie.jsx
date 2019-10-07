import React, { Component } from 'react';

class Movie extends Component {
  render () {
    const img = `http://image.tmdb.org/t/p/w185/${this.props.poster}`;
    const name = this.props.title;
    const sectionStyle = {
      backgroundImage: `url(${img})`
    };

  return (
    <div className="single-movie">
      <div style={ sectionStyle } className="movie-poster"></div>
      <h3>{name}</h3>
    </div>
    );
  }
}

export default Movie;

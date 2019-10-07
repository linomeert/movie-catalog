import React, { Component } from 'react';

class Movie extends Component {
 render () {
  const img = "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
  const name = "Pulp fiction";
  const sectionStyle = {
    backgroundImage: `url(${img})`
  };

  return (
    <div className="single-movie">
      <div style={ sectionStyle } className="movie-poster"></div>
      <h3>{name}</h3>
    </div>
  )
  }
}

export default Movie;

import React from 'react';

export const MovieCard = ({ id, title, poster_path, release_date, vote_average, overview, handleFavorite }) => {
  let movie = { movie_id: id, title, poster_path, release_date, vote_average, overview };
  let button = handleFavorite ?
    <div className="rating"><span className="like" onClick={ () => handleFavorite(movie) }>☆</span></div>
    : ""
  return (
    <div className='movie-card' id={id}>
      <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} />
      {button}
    </div>
  )
}

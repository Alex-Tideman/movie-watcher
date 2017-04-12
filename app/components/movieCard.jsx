import React from 'react';

export const MovieCard = ({ id, title, poster_path, release_date, vote_average, overview, handleFavorite }) => {
  let movie = { movie_id: id, title, poster_path, release_date, vote_average, overview };
  let button = handleFavorite ? <button onClick={ () => handleFavorite(movie) }>Add Favorite</button> : "DELETE BUTTON?"
  console.log('a;lsdkf;lskdfj');
  return (
    <div className='movie-card' id={id}>
      <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} />
      {button}
    </div>
  )
}

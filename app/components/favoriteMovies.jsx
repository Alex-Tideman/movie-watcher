import React, { Component } from 'react';
import { MovieCard } from './movieCard.jsx';

export const FavoriteMovies = (props) => {
  const favoriteMovies = props.favorites.map((movie) => <MovieCard key={movie.id} {...movie} />)
  return (
    <div className="container">
      <h1>Favorites</h1>
      {favoriteMovies}
    </div>
  )
}

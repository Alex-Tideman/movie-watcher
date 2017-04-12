import React, { Component } from 'react';
import { MovieCard } from './movieCard.jsx';

export default class MovieIndex extends Component {
  constructor() {
    super();
  }

  componentWillMount(e) {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=72dd63e7f1a8c927ce73ad8949399f40&language=en-US&page=1`)
    .then((response) => response.json())
    .then((response) => this.props.updateMovies(response.results))
  }

  handleFavorite(movie) {
    const { id } = this.props.user
    if(!id) return alert("Sign In please to like something")
    movie.user_id = id
    fetch(`api/users/favorites/new`,
      { method: "POST",
        headers: {
                'Content-Type': 'application/json'
                 }, body: JSON.stringify(movie)
      })
    .then((response) => response.json())
    .then((response) => {
        this.props.addFavorite(Object.assign(movie, {id: response.id }))
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    let movies = this.props.movieApi || [];
    movies = movies.map((movie) => {
      return <MovieCard key={movie.id} {...movie} handleFavorite={this.handleFavorite.bind(this)}/>
    });
    return (
      <div className="curtain">
        <div className="curtain__wrapper">
          <input type="checkbox" defaultChecked />
          <h2 className="draw-curtain">Click to reveal</h2>
          <div className="curtain__panel curtain__panel--left">
          </div>
          <div className='curtain__content container'>
            {movies}
          </div>
          <div className="curtain__panel curtain__panel--right">
          </div>
        </div>
      </div>
    )
  }
}

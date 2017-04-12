import React, { Component } from 'react';
import { MovieCard } from './movieCard.jsx';

export default class MovieIndex extends Component {
  constructor() {
    super();
  }

  componentWillMount(e) {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=72dd63e7f1a8c927ce73ad8949399f40&language=en-US&page=1`)
    .then((response) => {
      response.json()
      .then((response) => {
        this.props.updateMovies(response.results)
      })
    })
  }

  handleFavorite(movie) {
    if(!this.props.user  .id) return alert("Sign In please to like something")
    // fetch(`api/users/${this.props.userReducer.id}/favorites/${movieId}`, { method: "DELETE", headers: {
    // 'Content-Type': 'application/json' }})
    // .then((response) => {
    //   response.json().then((response) => {
    //     console.log('success', response)
    //     // this.props.addFavorite()
    //   })
    // }).catch((error) => {
    //   console.log(error)
    // })
    movie.user_id = this.props.user.id
    fetch(`api/users/favorites/new`, { method: "POST", headers: {
    'Content-Type': 'application/json'}, body: JSON.stringify(movie) })
    .then((response) => {
      response.json().then((response) => {
        console.log('success', response)
        this.props.addFavorite(Object.assign(movie, {id: response.id }))
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    let movies = this.props.movieApi || [];
    movies = movies.map((movie) => {
      return <MovieCard key={movie.id} {...movie} handleFavorite={this.handleFavorite.bind(this)}/>
    });
    return (
      <div>
        <div className='container'>
          {movies}
        </div>
      </div>
    )
  }
}

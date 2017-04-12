import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ContainerMovieIndex from '../containers/containerMovieIndex.js';
import ContainerLogin from '../containers/containerlogin.js';
import FavoriteContainer from '../containers/favoriteContainer.js';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    let userLink = <Link to='/login'><button> Login </button></Link>
    let favoriteLink;
    if (this.props.user.id) {
      userLink = <button onClick={() => this.props.signOutUser()}>Sign Out</button>
      favoriteLink = <Link to='/favorites'><button> Favorites </button></Link>
    }
    return (
      <div>
        <h1>Movie Watcher</h1>
        { userLink }
        { favoriteLink }<br/>
        <Route exact path='/' render={ () => <ContainerMovieIndex/> }/>
        <Route path='/login' render={ ({history}) => <ContainerLogin/> }/>
        <Route path='/signout' component={ ContainerLogin }/>
        <Route path='/favorites' component={ FavoriteContainer }/>
      </div>
    )
  }
}

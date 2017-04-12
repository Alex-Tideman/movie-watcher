export function addFavorite(movie) {
  return {
    type: 'ADD_FAVORITE',
    data: movie
  }
}

export function recieveUserFavorites(movies) {
  return {
    type: 'RECIEVE_MOVIES',
    data: movies
  }
}

export function updateMovies(data) {
  return {
    type: 'UPDATE_MOVIES',
    data: data
  }
}

export function signInUser(user) {
  return {
    type: 'SIGN_IN',
    user: user
  }
}

export function signOutUser(user) {
  return {
    type: 'SIGN_OUT',
    user: ''
  }
}

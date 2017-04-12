import * as reducers from '../app/reducers/index';

describe('favorites reducer', () => {

  it('should return the initial state', () => {
    expect(reducers.favoriteReducer(undefined, {}) ).toEqual([])
  })

  it('should return the array from ADD_FAVORITE', () => {
    const data = {title: 'Batman', movie_id: 0};
    const action = {type: 'ADD_FAVORITE', data: data};
    expect(reducers.favoriteReducer(undefined, action) ).toEqual([data])
  })

  it('should return the array from RECIEVE_FAVORITE', () => {
    const data = [{title: 'Batman'}, {title: 'Superman'}];
    const action = {type: 'RECIEVE_MOVIES', data: data};
    expect(reducers.favoriteReducer(undefined, action) ).toEqual(data)
  })

})

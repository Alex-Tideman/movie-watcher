import * as actions from '../app/actions/index.js';

describe('actions', () => {
  it('should create an action to add favorite', () => {
    const movie = { title: "Awesome", user_id: 1, movie_id: 2 };
    const expected = { type: 'ADD_FAVORITE', data: movie };
    
    expect(actions.addFavorite(movie)).toEqual(expected);
  })
})

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContainerApp from './containers/containerApp.js';
import ContainerLogin from './containers/containerlogin.js';
import ContainerMovieIndex from './containers/containerMovieIndex.js';
import FavoriteContainer from './containers/favoriteContainer.js';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux';
import { indexReducer } from './reducers/index.js';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(indexReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <ContainerApp/>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(
router, document.getElementById('main'))

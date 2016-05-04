import './main.scss';
import './api/facebook';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

// reducers
import kanbanApp from './reducers/kanbanApp';

const reducer = combineReducers(Object.assign({}, kanbanApp, {
  routing: routerReducer
}));

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

const history = syncHistoryWithStore(browserHistory, store);

// react components
import { Hero, TasksWall, Root } from './components';

const App = (props) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'));

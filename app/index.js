import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import firebaseMiddleware from './js/api';

// reducers
import kanbanApp from './reducers/kanbanApp';

const reducer = combineReducers(Object.assign({}, kanbanApp, {
  routing: routerReducer
}));

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    firebaseMiddleware,
    createLogger()
  )
);

const history = syncHistoryWithStore(browserHistory, store);

// react components
import { TasksWall, EditProject, Root } from './components';

const App = (props) => {

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Root}>
          <IndexRoute component={TasksWall} />
          <Route path="/wall" component={TasksWall}/>
          <Route path="/edit-mode" component={EditProject}/>
        </Route>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
